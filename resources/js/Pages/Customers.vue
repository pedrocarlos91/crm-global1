<template>
    <Head title="Clientes" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Clientes registrados</h2>
        </template>
        <div class="py-12">
            <span v-if="messageError" id="badge-dismiss-red" class="absolute mt-3 ml-14 py-1 px-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300">
              {{ messageError }}
            </span>
            <Table :data="data" :columns="columns" @details-row="detailCustomer" :show-new-element="false" @searchedData="searchedData" />
        </div>

    </AuthenticatedLayout>
    <generic-modal :show="showModal" @close-modal="closeModal">
        <template v-slot:title>Detalle del cliente</template>
        <template v-slot:content>
            <div class="flex py-4 justify-between flex-wrap  border-b border-b-gray-300">
                <h4 class="flex flex-col mb-4">
                    <span class="text-lg font-semibold">Status del cliente: </span>
                    {{customerDetail.status.label_es}}
                </h4>
                <div class="flex flex-col mb-4">
                    <span class="text-lg font-semibold">{{$t('services.service')}}</span>
                    {{$t('services.' + customerDetail.service)}}
                </div>
                <div class="flex flex-col mb-4">
                    <span class="text-lg font-semibold">{{$t('tables.titles.agency')}}</span>
                    {{customerDetail.agency?.name}}
                </div>
                <div>
                    <div class="d-inline-block mb-4" v-if="canAssign">
                        <InputLabel for="assign_agency" :value="$t('form.assign_to_agency')" />
                        <SelectInput :options="agencies" v-model="agencieSelected" class="mb-5" />
                        <PrimaryButton class="ml-3 disabled:opacity-25" :disabled="!agencieSelected" @click="assignAgency">
                            {{ $t('form.update_button') }}
                        </PrimaryButton>
                    </div>
                    <div class="d-inline-block mb-4" v-if="canChangeStatus">
                        <InputLabel for="currentStatus" :value="$t('form.new_status')" />
                        <SelectInput :options="statusOptions" v-model="currentStatus" class="mb-5" />
                        <div class="my-2">
                            <InputLabel for="currentStatus" :value="$t('form.comments') + ' *'" />
                            <TextAreaInput v-model="new_status_comments" class="w-full" />
                        </div>
                        <PrimaryButton class="disabled:opacity-25" :disabled="!currentStatus || !new_status_comments.length" @click="changeStatus">
                            {{ $t('form.update_button') }}
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <div class="my-4 border-b border-b-gray-300">
                <CustomerDetail :detail="customerDetail" />
            </div>
            <div class="my-3">
               <CustomerHistory :movements="customerDetail.history" />
            </div>
        </template>
        <template v-slot:footer>
            <SecondaryButton @click="showModal = false">
                {{$t('form.close_button')}}
            </SecondaryButton>
        </template>
    </generic-modal>

</template>

<script setup>
import {Head, router} from "@inertiajs/vue3";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import {computed, ref} from "vue"
import Table from "@/Pages/Partials/Table.vue";
import GenericModal from "@/Components/genericModal.vue"
import SelectInput from "@/Components/SelectInput.vue"
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputLabel from "@/Components/InputLabel.vue";
import CustomerDetail from "@/Components/Partials/CustomerDetail.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import CustomerHistory from "@/Components/CustomerHistory.vue";

const props = defineProps({
    data: {
        type: Object
    },
    customer: {
        type: Object
    },
    auth: {
        type: Object
    },
    errors: {
        type: Object
    }
})

const customerDetail = ref({})
const statusOptions = ref([])
const agencies = ref([])
const currentStatus = ref('')
const agencieSelected = ref('')
const new_status_comments = ref('')
const showModal = ref(false)
const messageError = ref('')

const canAssign = ref(false)
const canChangeStatus = ref(false)

if(props.errors) {
    messageError.value = props.errors.message
}

props.data.data.map((customer) => {
    customer.agency_name = customer.agency?.name
    customer.seller_name = customer.seller?.name
    customer.phone = customer.phone ?? customer.businessPhone
    customer.email = customer.email ?? customer.businessEmail
    customer.created_at = new Date(customer.created_at).toLocaleDateString()
    customer.customer_status = customer.status.label_es
})
const columns = [
    {title: 'tables.titles.name', data: 'name'},
    {title: 'tables.titles.lastname', data: 'lastname'},
    {title: 'tables.titles.email', data: 'email'},
    {title: 'tables.titles.phone', data: 'phone'},
    {title: 'tables.titles.agency', data: 'agency_name'},
    {title: 'tables.titles.seller', data: 'seller_name'},
    {title: 'Status', data: 'customer_status'},
    {title: 'tables.titles.registration_date', data: 'created_at'},
    {
        title: 'tables.titles.actions',
        actions: [
            // {type: 'edit', icon: 'fa-solid fa-pen-to-square'},
            {type: 'details', icon: 'fa-solid fa-info'},
        ]
    }
]
const searchedData = (e) => {
    props.data.value = e
    props.data.data.map((customer) => {
        customer.agency_name = customer.agency?.name
        customer.seller_name = customer.seller?.name
        customer.phone = customer.phone ?? customer.businessPhone
        customer.email = customer.email ?? customer.businessEmail
        customer.created_at = new Date(customer.created_at).toLocaleDateString()
    })
}

const detailCustomer = (customer) => {
    messageError.value = ''
    currentStatus.value = ''
    canAssign.value = false
    canChangeStatus.value = false
    axios.get('/customers/' + + customer.id)
        .then(response => {
            customerDetail.value = response.data.customer
            statusOptions.value = response.data.statuses
            agencies.value = response.data.agencies

            // currentStatus.value = response.data.customer.customer_status_id
            statusOptions.value.map(option => {
                option.value = option.id
                option.label = 'form.' + option.name
            })
            agencies.value.map(option => {
                option.value = option.id
                option.label = option.name
            })

            statusOptions.value = statusOptions.value.filter( (option) => {
                return (option.id > response.data.customer.customer_status_id)
            })

            if (props.auth.user.user_type === 'admin' && customerDetail.value.customer_status_id === 1) canAssign.value = true
            if ((props.auth.user.user_type === 'admin' || props.auth.user.user_type === 'insurance_carrier') && customerDetail.value.customer_status_id > 1) canChangeStatus.value = true
            showModal.value = true
        })
}
const closeModal = () => {
    showModal.value = false
}
const changeStatus = () => {
    router.visit('/customers/changeStatus', {
        method: 'post',
        data: {
            status: currentStatus.value,
            customer: customerDetail.value.id,
            comments: new_status_comments.value
        },
        onSuccess: page => {
            showModal.value = false
            location.reload()
        }
    })
}
const assignAgency = () => {
    router.visit('/customers/assign', {
        method: 'post',
        data: {
            agency: agencieSelected.value,
            customer: customerDetail.value.id
        },
        onFinish: page => {
            showModal.value = false
            location.reload()
        }
    })
}
</script>

<style scoped>

</style>
