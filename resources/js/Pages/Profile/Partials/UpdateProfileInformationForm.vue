<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;
const form = useForm({
    name: user.name,
    email: user.email,
    address: user.address || '',
    insurance_contact_name: user.insurance_contact_name,
    phone: user.phone,
    seller_reference: user.seller_reference
});
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">{{ $t('admin_panel.profile.page_title') }}</h2>

            <p class="mt-1 text-sm text-gray-600">
                {{ $t('admin_panel.profile.page_p') }}
            </p>
        </header>

        <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-6">
            <div>
                <InputLabel for="name" :value="$t('form.name') + ' *'" />
                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
                <InputError class="mt-2" :message="form.errors.name" />
            </div>
            <div v-if="user.user_type === 'seller'">
                <InputLabel for="email" :value="$t('form.seller_reference') + ' *'" />
                <TextInput id="seller_reference" type="text" class="mt-1 block w-full" v-model="form.seller_reference" required autofocus autocomplete="username" />
                <InputError class="mt-2" :message="form.errors.seller_reference" />
            </div>
            <div v-if="user.user_type === 'insurance_carrier'">
                <InputLabel for="insurance_carrier" :value="$t('form.agency_contact') + ' *'" />
                <TextInput id="insurance_carrier" type="text" class="mt-1 block w-full" v-model="form.insurance_contact_name" required autofocus autocomplete="insurance_contact_name" />
                <InputError class="mt-2" :message="form.errors.insurance_contact_name" />
            </div>
            <div>
                <InputLabel for="email" :value="$t('form.email') + ' *'" />
                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="name" />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>
            <div>
                <InputLabel for="email" :value="$t('form.address')" />
                <TextInput id="address" type="text" class="mt-1 block w-full" v-model="form.address" autofocus autocomplete="address" />
                <InputError class="mt-2" :message="form.errors.address" />
            </div>
            <div>
                <InputLabel for="phone" :value="$t('form.phone')" />
                <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" :placeholder="'10 ' +  $t('form.digits')" pattern="[0-9]{10}" minLength="10" maxLength="10" autofocus autocomplete="phone" />
                <InputError class="mt-2" :message="form.errors.phone" />
            </div>

<!--            <div v-if="mustVerifyEmail && user.email_verified_at === null">-->
<!--                <p class="text-sm mt-2 text-gray-800">-->
<!--                    Your email address is unverified.-->
<!--                    <Link-->
<!--                        :href="route('verification.send')"-->
<!--                        method="post"-->
<!--                        as="button"-->
<!--                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"-->
<!--                    >-->
<!--                        Click here to re-send the verification email.-->
<!--                    </Link>-->
<!--                </p>-->

<!--                <div-->
<!--                    v-show="status === 'verification-link-sent'"-->
<!--                    class="mt-2 font-medium text-sm text-green-600"-->
<!--                >-->
<!--                    A new verification link has been sent to your email address.-->
<!--                </div>-->
<!--            </div>-->

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">{{$t('form.update_button')}}</PrimaryButton>

                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">{{$t('messages.updated_information')}}</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
