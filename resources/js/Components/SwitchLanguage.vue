<template>
    <div class="fixed right-6 bottom-6">
        <select @change="changeLocale" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" v-model="locale">
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>
    </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const i18n = useI18n()
const locale = ref(localStorage.getItem('locale') ?? 'es')
i18n.locale.value = locale.value

const changeLocale = () => {
    localStorage.setItem('locale', locale.value)
    i18n.locale.value = locale.value
}

</script>

<style scoped>

</style>
