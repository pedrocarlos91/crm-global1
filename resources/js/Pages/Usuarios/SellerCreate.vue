<template>
    <GuestLayout>
        <Head :title="$t('new_seller.title')" />
            <CreateUserForm user_type="seller" create_route="/sellers" />
    </GuestLayout>
</template>

<script setup>
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import {Head, Link} from "@inertiajs/vue3";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import TextInput from "@/Components/TextInput.vue";
import CreateUserForm from "@/Pages/Profile/Partials/CreateUserForm.vue";
</script>

<style scoped>

</style>
