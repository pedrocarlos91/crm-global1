<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    groupName: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true
    },
    optionchecked: {
        type: String
    }
});

const emit = defineEmits(['updateRadio']);

const input = ref(null);

onMounted(() => {
});

defineExpose({ focus: () => input.value.focus() });

const changeRadio = ($event) => {
    console.log($event.target.value)
    emit('updateRadio', $event.target.value)
}
</script>

<template>
    <div class="flex flex-row">
        <div v-for="option in options" :key="option.value" class="mr-4">
                <input type="radio" :name="groupName" :id="option.value" :value="option.value" class="mr-2" @change="changeRadio" :checked="optionchecked === option.value">
                <label :for="option.value" >{{$t(option.label)}}</label>
        </div>
    </div>
</template>
