<template>
    <form @submit.prevent="form.post(create_route)">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!--            <div class="mb-5">-->
<!--                <InputLabel for="email" value="Tipo de Usuario *" />-->
                <!--                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="username" />-->
<!--                <select id="user_type" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full mt-1" v-model="form.user_type">-->
<!--                    <option value="seller">Vendedor</option>-->
<!--                    <option value="admin">Administrador</option>-->
<!--                    <option value="insurance_carrier">Aseguradora</option>-->
<!--                </select>-->
<!--                <InputError class="mt-2" :message="form.errors.user_type" />-->
<!--            </div>-->
<!--            <div class="mb-5" v-if="form.user_type === 'seller'">-->
<!--                <InputLabel for="email" value="Rreferencia del vendedor *" />-->
<!--                <TextInput id="seller_reference" type="text" class="mt-1 block w-full" v-model="form.seller_reference" required autofocus autocomplete="username" />-->
<!--                <InputError class="mt-2" :message="form.errors.seller_reference" />-->
<!--            </div>-->
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="mb-5">
                <InputLabel for="name" :value="$t('form.name') + ' *'" />
                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
                <InputError class="mt-2" :message="form.errors.name" />
            </div>
            <div class="mb-5">
                <InputLabel for="email" :value="$t('form.email') + ' *'" />
                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required  autocomplete="email" />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>
        </div>
        <div class="mb-5" v-if="form.user_type === 'insurance_carrier'">
            <InputLabel for="insurance_carrier" value="Nombre del contacto en agencia" />
            <TextInput id="insurance_carrier" type="text" class="mt-1 block w-full" v-model="form.insurance_contact_name" required autocomplete="insurance_carrier" />
            <InputError class="mt-2" :message="form.errors.insurance_contact_name" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="mb-5 md:col-span-2">
                <InputLabel for="address" :value="$t('form.address')" />
                <TextInput id="address" type="text" class="mt-1 block w-full" v-model="form.address" autocomplete="username" />
                <InputError class="mt-2" :message="form.errors.address" />
            </div>
            <div class="mb-5 md:col-span-1">
                <InputLabel for="phone" :value="$t('form.phone') + ' *'" />
                <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" :placeholder="'10 ' + $t('form.digits')" required pattern="[0-9]{10}" minLength="10" maxLength="10" autocomplete="phone" />
                <InputError class="mt-2" :message="form.errors.phone" />
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="mb-5">
                <InputLabel for="password" value="Password *" />
                <TextInput id="password" type="password" class="mt-1 block w-full"  minLength="8" v-model="form.password" required autocomplete="password" />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>
        </div>
        <div class="flex items-center justify-end mt-4">
            <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Guardar
            </PrimaryButton>
        </div>
    </form>
</template>

<script setup>

import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import {useForm} from "@inertiajs/vue3";

const props = defineProps({
    user_type: {
        type: String,
        required: true
    },
    create_route: {
        type: String,
        required: true
    }
})
const form = useForm({
    name: '',
    email: '',
    phone: '',
    address: '',
    insurance_contact_name: '',
    user_type: props.user_type,
    password: ''
})
</script>

<style scoped>

</style>
