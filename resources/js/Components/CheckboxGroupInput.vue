<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    // modelValue: {
    //     type: String,
    //     required: true,
    // },
    // groupName: {
    //     type: String,
    //     required: true,
    // },
    options: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['updateCheck']);

const input = ref(null);

onMounted(() => {
});
const changeCheck = ($event) => {
    const changed = {
        key: $event.target.id,
        value: $event.target.checked
    }
    emit('updateCheck', changed)
}

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <div class="flex flex-col">
        <div v-for="option in options" :key="option.value" class="mb-2">
                <input @change="changeCheck" type="checkbox" :id="option.value" class="mr-2">
                <label :for="option.value" >{{$t(option.label)}}</label>
        </div>
    </div>
</template>
