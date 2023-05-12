<template>
    <header
        class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"
    >
        <div
            class="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11"
        >
            <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
                <!-- Hamburger Toggle BTN -->
                <button
                    class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                    @click="$emit('changeSidebar')"
                >
                    <span class="relative block h-5.5 w-5.5 cursor-pointer">
                        <span class="du-block absolute right-0 h-full w-full">
                            <span
                                class="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"
                                :class="{ '!w-full delay-300': !sidebarToggle }"
                            ></span>
                            <span
                                class="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"
                                :class="{ 'delay-400 !w-full': !sidebarToggle }"
                            ></span>
                            <span
                                class="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"
                                :class="{ '!w-full delay-500': !sidebarToggle }"
                            ></span>
                        </span>
                        <span
                            class="du-block absolute right-0 h-full w-full rotate-45"
                        >
                            <span
                                class="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"
                                :class="{ '!h-0 delay-[0]': !sidebarToggle }"
                            ></span>
                            <span
                                class="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"
                                :class="{ 'dealy-200 !h-0': !sidebarToggle }"
                            ></span>
                        </span>
                    </span>
                </button>
                <!-- Hamburger Toggle BTN -->
                <a
                    class="block flex-shrink-0 lg:hidden"
                    :href="route('dashboard')"
                >
                    <ApplicationLogo class="h-8 fill-current text-gray-500" />
                </a>
            </div>
            <div></div>
            <div class="flex items-center gap-3 2xsm:gap-7">
                <!-- User Area -->
                <div
                    class="relative"
                >
                    <a
                        class="flex items-center"
                        href="#"
                        v-on:click="dropdownOpen = !dropdownOpen"
                    >
                        <span class="text-right block">
                            <span
                                class="block text-sm font-medium text-black dark:text-white"
                                >{{$page.props.auth.user.name}}</span
                            >
                            <span class="block text-xs font-medium"
                                >{{$page.props.auth.user.email}}</span
                            >
                        </span>

                        <span class="h-12 w-12 rounded-full"> </span>

                        <svg
                            :class="dropdownOpen && 'rotate-180'"
                            class="fill-current block"
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                                fill=""
                            />
                        </svg>
                    </a>

                    <!-- Dropdown Start -->
                    <div
                        v-if="dropdownOpen"
                        class="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
                    >
                        <ul
                            class="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark"
                        >
                            <li>
                                <a
                                    :href="route('profile.edit')"
                                    class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                                >
                                    <i class="fa-solid fa-address-card"></i>
                                    {{ $t('admin_panel.header.profile') }}
                                </a>
                            </li>
                        </ul>
                            <button v-on:click="logout" class="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                                <i class="fa-solid fa-right-from-bracket"></i>
                                {{ $t('admin_panel.header.logout') }}
                            </button>
                    </div>
                    <!-- Dropdown End -->
                </div>
                <!-- User Area -->
            </div>
        </div>
    </header>
</template>

<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import {ref} from "vue";

export default {
    name: "Header",
    components: { ApplicationLogo },
    props: {
        sidebarToggle: Boolean
    },
    methods: {
        logout() {
            this.$inertia.post('logout')
        },
        // changeSidebarToggle() {
        //     this.$emit('changeSidebar')
        // }
    },
    data() {
        return {
            dropdownOpen: ref(false)
        }
    }
};
</script>

<style scoped></style>
