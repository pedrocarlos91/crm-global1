<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3';
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import SelectInput from "@/Components/SelectInput.vue";
import {ref} from "vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

const service_options = [
    {label: 'services.health_insurance', value: 'health_insurance'},
    {label: 'services.credit_solutions', value: 'credit_solutions'},
    {label: 'services.life_insurance', value: 'life_insurance'},
    {label: 'services.business_consulting', value: 'business_consulting'},
    {label: 'services.auto_commercial_insurance', value: 'auto_commercial_insurance'},
    {label: 'services.business_credit', value: 'business_credit'},
    {label: 'services.personal_loan_low_mortgage', value: 'personal_loan_low_mortgage'},
    {label: 'services.taxes', value: 'taxes'},
    {label: 'services.home_insurance', value: 'home_insurance'},

]

const form = useForm({
    service: '',
    name: '',
    lastname: '',
    phone: '',
    businessPhone: '',
    email: '',
    businessEmail: '',
    // seller_id: 0,
    // insurance_service_id: 0,
    locale: localStorage.getItem('locale')
});

const showPhone = ref(false)
const showBusinessPhone = ref(false)
const showEmail = ref(false)
const showbusinessEmail = ref(false)
const changeService = ($event) => {
    showPhone.value = false
    showBusinessPhone.value = false
    showEmail.value = false
    showbusinessEmail.value = false

    console.log($event.target.value)
    console.log(form);

    switch ($event.target.value) {
        case 'health_insurance':            showPhone.value = true
                                            showEmail.value = true
                                            break
        case 'credit_solutions':            showPhone.value = true
                                            showEmail.value = true
                                            break
        case 'life_insurance':              showPhone.value = true
                                            showEmail.value = true
                                            break
        case 'business_consulting':         showBusinessPhone.value = true
                                            showbusinessEmail.value = true
                                            break
        case 'auto_commercial_insurance':   showPhone.value = true
                                            showEmail.value = true
                                            break
        case 'business_credit':             showBusinessPhone.value = true
                                            showbusinessEmail.value = true
                                            break
        case 'personal_loan_low_mortgage':  showPhone.value = true
                                            showEmail.value = true
                                            break
        case 'taxes':                       showPhone.value = true
                                            showEmail.value = true
                                            break
        case 'home_insurance':              showPhone.value = true
                                            showEmail.value = true
                                            break
    }
}
</script>

<template>
    <GuestLayout>
        <Head title="Registro" />
        <div class="">
            <div class="max-w-7xl mx-auto">
                <div class="bg-white overflow-hidden">
                    <div class="my-6">
                        <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{$t('form_page.title')}}</h2>
                        <p class="mt-5 text-sm">{{$t('form_page.paragraph')}}</p>
                    </div>
                    <div class="py-4">
                        <form @submit.prevent="form.post('/customers')">
                            <div class="">
                                <div class="mb-5">
                                    <InputLabel for="service" :value="$t('form.select_service')" />
                                    <SelectInput id="service" class="mt-1 block w-full" v-model="form.service" :options="service_options" @change="changeService" required autofocus />
                                    <InputError class="mt-2" :message="form.errors.service" />
                                </div>
                                <template class="my-5" v-if="form.service">
                                    <div class="mb-5">
                                        <InputLabel for="name" :value="$t('form.first_name') + ' *'" />
                                        <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
                                        <InputError class="mt-2" :message="form.errors.name" />
                                    </div>
                                    <div class="mb-5">
                                        <InputLabel for="lastnamename" :value="$t('form.last_name') + ' *'" />
                                        <TextInput id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname" required autofocus autocomplete="lastname" />
                                        <InputError class="mt-2" :message="form.errors.lastname" />
                                    </div>
                                    <div class="mb-5" v-if="showPhone">
                                        <InputLabel for="phone" :value="$t('form.phone') + ' *'" />
                                        <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" :placeholder="'10 ' + $t('form.digits')" pattern="[0-9]{10}" minLength="10" maxLength="10" required autofocus autocomplete="phone" />
                                        <InputError class="mt-2" :message="form.errors.phone" />
                                    </div>
                                    <div class="mb-5" v-if="showBusinessPhone">
                                        <InputLabel for="phone" :value="$t('form.business_phone') + ' *'" />
                                        <TextInput id="businessPhone" type="text" class="mt-1 block w-full" v-model="form.businessPhone" :placeholder="'10 ' + $t('form.digits')" pattern="[0-9]{10}" minLength="10" maxLength="10" required autofocus autocomplete="phone" />
                                        <InputError class="mt-2" :message="form.errors.businessPhone" />
                                    </div>
                                    <div class="mb-5" v-if="showEmail">
                                        <InputLabel for="email" :value="$t('form.email') + ' *'" />
                                        <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="email" />
                                        <InputError class="mt-2" :message="form.errors.email" />
                                    </div>
                                    <div class="mb-5" v-if="showbusinessEmail">
                                        <InputLabel for="email" :value="$t('form.business_email') + ' *'" />
                                        <TextInput id="businessEmail" type="email" class="mt-1 block w-full" v-model="form.businessEmail" required autofocus autocomplete="email" />
                                        <InputError class="mt-2" :message="form.errors.businessEmail" />
                                    </div>
                                    <!--                                <div class="mb-5">-->
                                    <!--                                    <InputLabel for="insurance_service_id" value="Servicio *" />-->
                                    <!--    &lt;!&ndash;                                <TextInput id="insurance_service_id" type="text" class="mt-1 block w-full" v-model="form.insurance_service_id" required autofocus autocomplete="username" />&ndash;&gt;-->
                                    <!--                                    <select id="user_type" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full mt-1" v-model="form.insurance_service_id">-->
                                    <!--                                        <option class="py-4" value="seller">Vendedor</option>-->
                                    <!--                                        <option class="py-4" value="admin">Administrador</option>-->
                                    <!--                                        <option class="py-4" value="insurance_carrier">Aseguradora</option>-->
                                    <!--                                    </select>-->
                                    <!--                                    <InputError class="mt-2" :message="form.errors.insurance_service_id" />-->
                                    <!--                                </div>-->

                                    <div class="flex items-center justify-start mt-4">
                                        <PrimaryButton class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                            {{ $t('form.save_button') }}
                                        </PrimaryButton>
                                    </div>
                                </template>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>

<style>
</style>
