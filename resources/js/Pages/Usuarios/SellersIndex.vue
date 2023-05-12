<template>
    <Head title="Vendedores" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Vendedores Registrados</h2>
        </template>

        <div class="py-12">
            <Table :data="sellers" route-new-element="sellers.create" :columns="columns" @edit-row="editSeller" @delete-row="deleteSeller" @searchedData="searchedData" />
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import {Head, usePage} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Table from "@/Pages/Partials/Table.vue";
import {ref} from "vue";

const sellers = ref(usePage().props.data)

const columns = [
    {title: 'tables.titles.name', data: 'name'},
    {title: 'tables.titles.email', data: 'email'},
    {title: 'tables.titles.seller_reference', data: 'seller_reference'},
    {title: 'tables.titles.phone', data: 'phone'},
    {title: 'tables.titles.address', data: 'address'},
    {
        title: 'tables.titles.actions',
        actions: [
            // {type: 'edit', icon: 'fa-solid fa-pen-to-square'},
            {type: 'delete', icon: 'fa-solid fa-trash'},
        ]
    }
]

const editSeller = (e) => {
    console.log(e)
}

const deleteSeller = (e) => {
    console.log(e)
}
const searchedData = (e) => {
    sellers.value = e
}

</script>

<style scoped>

</style>
