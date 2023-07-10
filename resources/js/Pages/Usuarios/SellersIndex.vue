<template xmlns:template="http://www.w3.org/1999/html">
    <Head title="Vendedores" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Vendedores Registrados</h2>
        </template>
        <div class="py-12">
            <Table :data="sellers"
                   route-new-element="sellers.create"
                   :columns="columns"
                   @edit-row="editSeller"
                   @delete-row="deleteSeller"
                   @searchedData="searchedData"
                   @activate-row="activateSeller"
                   :show-new-element="false"
            />
        </div>
    </AuthenticatedLayout>
    <ConfirmDeleteActivate
        :show-modal="showConfirmDeleteActivate"
        :action-type="actionConfirmType"
        :user-to-confirm="userToConfirm"
        @close="showConfirmDeleteActivate = false"
    />

</template>

<script setup>
import {Head, router, usePage} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Table from "@/Pages/Partials/Table.vue";
import {ref} from "vue";
import ConfirmDeleteActivate from "@/Components/ConfirmDeleteActivate.vue";
import GenericModal from "@/Components/genericModal.vue";

const sellers = ref(usePage().props.data)
const showConfirmDeleteActivate = ref(false)
const actionConfirmType = ref('')
const userToConfirm = ref({})

const columns = [
    {title: 'tables.titles.name', data: 'name'},
    {title: 'tables.titles.email', data: 'email'},
    {title: 'tables.titles.seller_reference', data: 'seller_reference'},
    {title: 'tables.titles.phone', data: 'phone'},
    {title: 'tables.titles.address', data: 'address'},
    {
        title: 'tables.titles.actions',
        actions: [
            {type: 'activate', icon: 'fa-solid fa-power-off'},
            {type: 'edit', icon: 'fa-solid fa-edit'},
            {type: 'delete', icon: 'fa-solid fa-trash'},
        ]
    }
]

const editSeller = (e) => {
    router.visit('/user/' + e.id + '/edit')
}

const deleteSeller = (e) => {
    showConfirmDeleteActivate.value = true
    actionConfirmType.value = 'delete'
    userToConfirm.value = e
}
const searchedData = (e) => {
    sellers.value = e
}

const activateSeller = (e) => {
    showConfirmDeleteActivate.value = true
    actionConfirmType.value = 'activate'
    userToConfirm.value = e
}

</script>

<style scoped>

</style>
