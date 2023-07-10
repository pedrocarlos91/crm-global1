<template>
    <Head title="Agencias" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Agencias Registradas</h2>
        </template>

        <div class="py-12">
            <Table :data="agencies" route-new-element="agencies.create" :columns="columns" @edit-row="editAgency" @activate-row="activateAgency" @delete-row="deleteAgency" @searchedData="searchedData" />
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
import Table from "@/Pages/Partials/Table.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {ref} from "vue";
import ConfirmDeleteActivate from "@/Components/ConfirmDeleteActivate.vue";

const agencies = ref(usePage().props.data)
const showConfirmDeleteActivate = ref(false)
const actionConfirmType = ref('')
const userToConfirm = ref({})

const columns = [
    {title: 'tables.titles.name', data: 'name'},
    {title: 'tables.titles.email', data: 'email'},
    {title: 'tables.titles.phone', data: 'phone'},
    {title: 'tables.titles.address', data: 'address'},
    {title: 'tables.titles.agency_contact', data: 'insurance_contact_name'},
    {
        title: 'tables.titles.actions',
        actions: [
            // {type: 'edit', icon: 'fa-solid fa-pen-to-square'},
            {type: 'activate', icon: 'fa-solid fa-power-off'},
            {type: 'edit', icon: 'fa-solid fa-edit'},
            {type: 'delete', icon: 'fa-solid fa-trash'},
        ]
    }
]

const editAgency = (e) => {
    router.visit('/user/' + e.id + '/edit')
}

const deleteAgency = (e) => {
    showConfirmDeleteActivate.value = true
    actionConfirmType.value = 'delete'
    userToConfirm.value = e
}
const searchedData = (e) => {
    agencies.value = e
}
const activateAgency = (e) => {
    showConfirmDeleteActivate.value = true
    actionConfirmType.value = 'activate'
    userToConfirm.value = e
}

</script>

<style scoped>

</style>
