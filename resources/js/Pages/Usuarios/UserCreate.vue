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
                        <form @submit.prevent="form.post('/user')">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-5">
                                    <InputLabel for="email" value="Tipo de Usuario *" />
    <!--                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="username" />-->
                                        <select id="user_type" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full mt-1" v-model="form.user_type">
                                            <option value="seller">Vendedor</option>
                                            <option value="admin">Administrador</option>
                                            <option value="insurance_carrier">Aseguradora</option>
                                        </select>
                                    <InputError class="mt-2" :message="form.errors.user_type" />
                                </div>
                                <div class="mb-5" v-if="form.user_type === 'seller'">
                                    <InputLabel for="email" value="Rreferencia del vendedor *" />
                                    <TextInput id="seller_reference" type="text" class="mt-1 block w-full" v-model="form.seller_reference" required autofocus autocomplete="username" />
                                    <InputError class="mt-2" :message="form.errors.seller_reference" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-5">
                                    <InputLabel for="name" value="Nombre" />
                                    <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="username" />
                                    <InputError class="mt-2" :message="form.errors.name" />
                                </div>
                                <div class="mb-5">
                                    <InputLabel for="email" value="Email" />
                                    <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />
                                    <InputError class="mt-2" :message="form.errors.email" />
                                </div>
                            </div>
                            <div class="mb-5" v-if="form.user_type === 'insurance_carrier'">
                                <InputLabel for="insurance_carrier" value="Nombre del Contacto Aseguradora" />
                                <TextInput id="insurance_carrier" type="text" class="mt-1 block w-full" v-model="form.insurance_contact_name" required autofocus autocomplete="username" />
                                <InputError class="mt-2" :message="form.errors.insurance_contact_name" />
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="mb-5 md:col-span-2">
                                    <InputLabel for="address" value="Dirección" />
                                    <TextInput id="address" type="text" class="mt-1 block w-full" v-model="form.address" autofocus autocomplete="username" />
                                    <InputError class="mt-2" :message="form.errors.address" />
                                </div>
                                <div class="mb-5 md:col-span-1">
                                    <InputLabel for="phone" value="Teléfono" />
                                    <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" placeholder="10 dígitos" pattern="[0-9]{10}" minLength="10" maxLength="10" required autofocus autocomplete="username" />
                                    <InputError class="mt-2" :message="form.errors.phone" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="mb-5">
                                    <InputLabel for="password" value="Password" />
                                    <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autofocus autocomplete="username" />
                                    <InputError class="mt-2" :message="form.errors.password" />
                                </div>
                            </div>
                            <div class="flex items-center justify-end mt-4">
                                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Guardar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import {Head, Link, useForm} from "@inertiajs/vue3"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Checkbox from "@/Components/Checkbox.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";

    // const props = defineProps({
    //     user: {
    //         type: Object,
    //         default: () => ({})
    //     }
    // })
    // const form = useForm({
    //     name: String,
    //     email: String,
    //     phone: String,
    //     address: String,
    //     insurance_contact_name: String,
    //     seller_reference: String,
    //     user_type: String,
    //     password: String
    // })
    const form = useForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        insurance_contact_name: '',
        seller_reference: '',
        user_type: 'seller',
        password: ''
    })
</script>

<style scoped>

</style>
