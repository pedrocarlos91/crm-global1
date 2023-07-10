<template>
    <Head title="Admin" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Usuarios Registrados</h2>
        </template>

        <div class="py-12">
           <Table :data="admins" route-new-element="users.create" :columns="columns" @edit-row="editAdmin" @activate-row="activateAdmin" @delete-row="deleteAdmin" @searchedData="searchedData" />
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
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Table from "@/Pages/Partials/Table.vue";

const admins = ref(usePage().props.data)
const showConfirmDeleteActivate = ref(false)
const actionConfirmType = ref('')
const userToConfirm = ref({})

import {Head, usePage} from '@inertiajs/vue3';
import {ref} from "vue";
import ConfirmDeleteActivate from "@/Components/ConfirmDeleteActivate.vue";

const columns = [
    {title: 'tables.titles.name', data: 'name'},
    {title: 'tables.titles.email', data: 'email'},
    {title: 'tables.titles.phone', data: 'phone'},
    {
        title: 'tables.titles.actions',
        actions: [
            // {type: 'edit', icon: 'fa-solid fa-pen-to-square'},
            {type: 'activate', icon: 'fa-solid fa-power-off'},
            {type: 'delete', icon: 'fa-solid fa-trash'},
        ]
    }
]

const editAdmin = (e) => {
    router.pro
}

const deleteAdmin = (e) => {
    showConfirmDeleteActivate.value = true
    actionConfirmType.value = 'delete'
    userToConfirm.value = e
}

const activateAdmin = (e) => {
    showConfirmDeleteActivate.value = true
    actionConfirmType.value = 'activate'
    userToConfirm.value = e
}

const searchedData = (e) => {
    admins.value = e
}

</script>

<style scoped>

</style>
