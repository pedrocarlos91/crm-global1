<template>
    <Head title="Agencias" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Agencias Registradas</h2>
        </template>

        <div class="py-12">
            <Table :data="agencies" route-new-element="agencies.create" :columns="columns" @edit-row="editAgency" @delete-row="deleteAgency" @searchedData="searchedData" />
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import {Head, usePage} from "@inertiajs/vue3";
import Table from "@/Pages/Partials/Table.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {ref} from "vue";

const agencies = ref(usePage().props.data)

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
            {type: 'delete', icon: 'fa-solid fa-trash'},
        ]
    }
]

const editAgency = (e) => {
    console.log(e)
}

const deleteAgency = (e) => {
    console.log(e)
}
const searchedData = (e) => {
    agencies.value = e
}

</script>

<style scoped>

</style>
