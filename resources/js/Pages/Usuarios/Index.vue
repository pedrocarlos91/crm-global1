<template>
    <Head title="Usuarios" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Usuarios Registrados</h2>
        </template>

        <div class="py-12">
           <Table :data="admins" route-new-element="users.create" :columns="columns" @edit-row="editAdmin" @delete-row="deleteAdmin" @searchedData="searchedData" />
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Table from "@/Pages/Partials/Table.vue";

const admins = ref(usePage().props.data)

import {Head, usePage} from '@inertiajs/vue3';
import {ref} from "vue";

const columns = [
    {title: 'tables.titles.name', data: 'name'},
    {title: 'tables.titles.email', data: 'email'},
    {title: 'tables.titles.phone', data: 'phone'},
    {
        title: 'tables.titles.actions',
        actions: [
            // {type: 'edit', icon: 'fa-solid fa-pen-to-square'},
            {type: 'delete', icon: 'fa-solid fa-trash'},
        ]
    }
]

const editAdmin = (e) => {
    console.log(e)
}

const deleteAdmin = (e) => {
    console.log(e)
}

const searchedData = (e) => {
    admins.value = e
}

</script>

<style scoped>

</style>
