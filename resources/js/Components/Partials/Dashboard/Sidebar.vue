<template>
    <aside
        :class="sidebarToggle ? 'translate-x-0' : '-translate-x-full'"
        class="absolute left-0 top-0 z-50 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gray-800 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
    >
        <!-- SIDEBAR HEADER -->
        <div class="flex items-center justify-between gap-2 px-6 py-6 lg:py-7">
            <div class="mb-10">
                <a :href="route('customers.index')" class="absolute left-1/3">
                    <ApplicationLogo class="h-20 fill-current text-gray-500 " />
                </a>
            </div>
            <button
                class="block lg:hidden"
                @click="$emit('changeSidebar')"
            >
                <span class="text-white"><i class="fa-solid fa-arrow-left"></i></span>
<!--                <svg-->
<!--                    class="fill-current"-->
<!--                    width="20"-->
<!--                    height="18"-->
<!--                    viewBox="0 0 20 18"-->
<!--                    fill="none"-->
<!--                    xmlns="http://www.w3.org/2000/svg"-->
<!--                >-->
<!--                    <path-->
<!--                        d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"-->
<!--                        fill=""-->
<!--                    />-->
<!--                </svg>-->
            </button>
        </div>
        <!-- SIDEBAR HEADER -->

        <div
            class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear"
        >
            <!-- Sidebar Menu -->
            <nav
                class="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
                x-data="{selected: $persist('Dashboard')}"
            >
                <!-- Menu Group -->
                <div>
                    <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">MENU</h3>
                    <ul class="mb-6 flex flex-col gap-1.5">
                        <li v-for="page in pages">
                            <div v-if="$page.props.auth.user.user_type === 'admin' || !page.isAdmin">
                                <a :href="page.route"
                                   class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                   :class="{'bg-graydark': $page.url.startsWith(page.startsWith)}"
                                >
                                    <span><i :class="page.icon"></i></span>
                                    {{ $t(page.title) }}
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- Sidebar Menu -->
        </div>
    </aside>
</template>

<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import {useI18n} from "vue-i18n";
import {ref} from "vue";

export default {
    name: "Sidebar",
    components: {ApplicationLogo},
    props: {
        sidebarToggle: Boolean
    },
    data() {
        return {
            pages: [
                {title: 'admin_panel.sidebar.dashboard', route: route('dashboard'), startsWith: '/dashboard', icon: 'fa-solid fa-chart-line', isAdmin: true},
                {title: 'admin_panel.sidebar.customers', route: route('customers.index'), startsWith: '/customers', icon: 'fa-solid fa-users', isAdmin: false},
                {title: 'admin_panel.sidebar.admins', route: route('users.index'), startsWith: '/user', icon: 'fa-solid fa-user-gear', isAdmin: true},
                {title: 'admin_panel.sidebar.agencies', route: route('agencies.index'), startsWith: '/agencies', icon: 'fa-solid fa-globe', isAdmin: true},
                {title: 'admin_panel.sidebar.sellers', route: route('sellers.index'), startsWith: '/sellers', icon: 'fa-solid fa-person-walking-luggage', isAdmin: true},
            ]
        }
    },
    computed: {
        customers() {
            console.log(this.$t('admin_panel.sidebar.customers'))
            return ref('algo')
        }
    }
}
</script>

<style scoped>

</style>
