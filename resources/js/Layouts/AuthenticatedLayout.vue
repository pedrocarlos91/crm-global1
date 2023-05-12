<script setup>
import {computed, ref} from 'vue';
// import ApplicationLogo from '@/Components/ApplicationLogo.vue';
// import Dropdown from '@/Components/Dropdown.vue';
// import DropdownLink from '@/Components/DropdownLink.vue';
// import NavLink from '@/Components/NavLink.vue';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import {Link, usePage} from '@inertiajs/vue3';
import Sidebar from "@/Components/Partials/Dashboard/Sidebar.vue";
import Header from "@/Components/Partials/Dashboard/Header.vue";
import SwitchLanguage from "@/Components/SwitchLanguage.vue";

const showingNavigationDropdown = ref(false);
const sidebarToggle = ref(false)

const isAdmin = computed(() => {
    return usePage().props.auth.user.user_type === 'admin';
})
</script>

<template x-data="{ page: 'ecommerce', 'loaded': true, 'darkMode': true, 'stickyMenu': false, 'sidebarToggle': false, 'scrollTop': false }"
          x-init="darkMode = JSON.parse(localStorage.getItem('darkMode')); $watch('darkMode', value => localStorage.setItem('darkMode', JSON.stringify(value)))"
          :class="{'dark text-bodydark bg-boxdark-2': darkMode === true}">

    <!-- ===== Page Wrapper Start ===== -->
    <div class="flex h-screen overflow-hidden">
        <!-- ===== Sidebar Start ===== -->
            <Sidebar :sidebar-toggle="sidebarToggle" @changeSidebar="sidebarToggle = !sidebarToggle" />
        <!-- ===== Sidebar End ===== -->

        <!-- ===== Content Area Start ===== -->
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <!-- ===== Header Start ===== -->
                <Header :sidebar-toggle="sidebarToggle" @changeSidebar="sidebarToggle = !sidebarToggle" />
            <!-- ===== Header End ===== -->

            <!-- ===== Main Content Start ===== -->

            <main>
                <div class="mx-auto w-full p-4 md:p-6 2xl:p-10 bg-gray-100">
                    <main>
                        <slot />
                    </main>
                </div>
            </main>

            <!-- ===== Main Content End ===== -->
        </div>
        <!-- ===== Content Area End ===== -->
    </div>
    <!-- ===== Page Wrapper End ===== -->
    <SwitchLanguage />
</template>
