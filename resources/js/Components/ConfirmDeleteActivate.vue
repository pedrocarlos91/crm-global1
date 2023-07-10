<template>
    <generic-modal :show="showModal" @close-modal="closeModal">
        <template v-slot:title>{{ $t(getTitle) }}</template>
        <template v-slot:content>
            <div class="text-center">
                {{$t(getQuestion) + userToConfirm.name + '?'}}
            </div>
        </template>
        <template v-slot:footer>
            <div class="flex">
                <PrimaryButton class="mr-3 disabled:opacity-25" @click="accept">
                    {{ $t('form.accept_button') }}
                </PrimaryButton>
                <SecondaryButton @click="emit('close')">
                    {{$t('form.cancel_button')}}
                </SecondaryButton>
            </div>
        </template>
    </generic-modal>
</template>

<script setup>
import GenericModal from "@/Components/genericModal.vue";
import {computed} from "vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import axios from "axios";
import {router} from "@inertiajs/vue3";

const props = defineProps({
    showModal: {
        type: Boolean
    },
    actionType: {
        type: String
    },
    userToConfirm: {
        type: Object
    }
})
const emit = defineEmits(['close'])

const getTitle = computed(() => {
    let title
    if (props.actionType === 'delete') {
        switch (props.userToConfirm.user_type) {
            case 'seller': title = 'action_users.title_delete_seller'
                    break
            case 'admin': title = 'action_users.title_delete_admin'
                    break
            case 'insurance_carrier': title = 'action_users.title_delete_agency'
                    break
        }
        return title
    }

    if (props.userToConfirm.is_active) {
        switch (props.userToConfirm.user_type) {
            case 'seller': title = 'action_users.title_deactivate_seller'
                break
            case 'admin': title = 'action_users.title_deactivate_admin'
                break
            case 'insurance_carrier': title = 'action_users.title_deactivate_agency'
                break
        }
        return title
    }

    switch (props.userToConfirm.user_type) {
        case 'seller': title = 'action_users.title_reactivate_seller'
            break
        case 'admin': title = 'action_users.title_reactivate_admin'
            break
        case 'insurance_carrier': title = 'action_users.title_reactivate_agency'
            break
    }
    return title
})

const getQuestion = computed(() => {
    if (props.actionType === 'delete') return 'action_users.question_delete'

    if (props.userToConfirm.is_active) return 'action_users.question_deactivate'

    return 'action_users.question_reactivate'
})
const closeModal = () => {
    emit('close')
}
const accept = () => {
    if (props.actionType === 'activate') {
        router.visit('/user/activation', {
            method: 'post',
            data: {
                user_id: props.userToConfirm.id
            },
            onFinish: page => {
                emit('close')
                location.reload()
            }
        })
    }
    if (props.actionType === 'delete') {
        router.visit('/user/' + props.userToConfirm.id, {
            method: 'delete',
            onFinish: page => {
                emit('close')
                // location.reload()
            }
        })
    }
}
</script>
