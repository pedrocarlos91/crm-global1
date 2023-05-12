<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true
    }
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
            class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
            ref="input"
    >
        <option value="" selected disabled>{{$t('form.select_option_empty')}}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ $t(option.label) }}</option>
    </select>

</template>
