<template>
    <div class="relative overflow-x-auto">
        <h4 class="font-semibold">{{$t('general.customer_history')}}</h4>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md mt-4">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th>{{$t('tables.titles.status')}}</th>
                    <th>{{$t('tables.titles.comments')}}</th>
                    <th>{{$t('tables.titles.date')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movement in movements" :key="movement.id">
                    <td>{{$t('statuses.' + movement.status.name)}}</td>
                    <td>{{movement.comments}}</td>
                    <td>{{new Date(movement.created_at).toLocaleDateString()}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import Table from "@/Pages/Partials/Table.vue";

    const props = defineProps({
        movements: {
            required: true,
            type: Object
        }
    })
</script>

<style scoped>

</style>
