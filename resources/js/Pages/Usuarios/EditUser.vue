<template>
    <Head title="Edit" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Actualizar información</h2>
        </template>
        <form @submit.prevent="form.put('/user/' + props.user.id)">
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
            <div class="mb-5" v-if="props.user.user_type === 'insurance_carrier'">
                <InputLabel for="insurance_carrier" :value="$t('form.contact_insurance_carrier')" />
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
            <div class="flex items-center justify-end mt-4">
                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">{{$t('messages.updated_information')}}</p>
                </Transition>
                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Guardar
                </PrimaryButton>
            </div>
        </form>
    </AuthenticatedLayout>
</template>

<script setup>
import Table from "@/Pages/Partials/Table.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head, useForm} from "@inertiajs/vue3";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";

const props = defineProps({
    user: {
        type: Object
    },
    message: {
        type: String
    }
})

const form = useForm({
    name: props.user.name,
    email: props.user.email,
    phone: props.user.phone,
    address: props.user.address,
    insurance_contact_name: props.user.insurance_contact_name,
})

</script>

<style scoped>

</style>
