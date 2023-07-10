<script setup>
import {Head, Link, router, useForm} from '@inertiajs/vue3';
import GuestLayout from "@/Layouts/GuestLayout.vue";
import SelectInput from "@/Components/SelectInput.vue";
import {ref} from "vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import RadioGroupInput from "@/Components/RadioGroupInput.vue";
import CheckboxGroupInput from "@/Components/CheckboxGroupInput.vue";

</script>

<template>
    <GuestLayout>
        <Head title="Registered" />
        <div class="">
            <div class="max-w-7xl mx-auto">
                <div class="bg-white overflow-hidden">
                    <div class="my-6">
                        <span class="text-lg">
                            Gracias por registrarte con nosotros en breve un asesor se pondra en contacto contigo para comenzar a disfrutar de todos nuestros servicios.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>

<style>
</style>
