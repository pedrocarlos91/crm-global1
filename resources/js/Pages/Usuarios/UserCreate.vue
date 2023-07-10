<template>
    <Head title="Usuarios" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Nuevo Usuario</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6">
                        <CreateUserForm :user_type="type_form" create_route="/user" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import {Head, Link, useForm} from "@inertiajs/vue3"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import CreateUserForm from "@/Pages/Profile/Partials/CreateUserForm.vue";

    const props = defineProps({
        type_user: {
            type: String
        }
    })
    const type = props.type_user.split('/')
    let type_form = 'admin'
    if (type[0] === 'agencies') {
        type_form = 'insurance_carrier'
    }
</script>

<style scoped>

</style>
