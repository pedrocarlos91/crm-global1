<template>
    <div class="mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6">
                <a :href="route(routeNewElement)" v-if="showNewElement" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <i class="fas fa-plus-circle"></i> <span class="ml-2">{{$t('tables.labels.new')}}</span>
                </a>
                <div class="relative overflow-x-auto sm:rounded-lg mt-8 mb-5">
                    <div class="flex items-center md:justify-between pb-5 flex-col md:flex-row">
                        <div class="mb-4 md:mb-0">
                            <span class="mr-3">{{$t('tables.labels.show')}} :</span>
                            <select id="countries" v-model="per_page" @change="change_per_page" class="border-0 border-b-2 border-b-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                        <label for="table-search" class="sr-only">{{$t('tables.labels.search')}}</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input v-model="search" @input="searchData()" type="text" id="table-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('tables.labels.search')">
                        </div>
                    </div>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md mb-4">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th v-for="column in columns" class="px-6 py-3">{{$t(column.title)}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" v-for="row in data.data">
                            <template v-for="column in columns">
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" v-if="!column.actions">
                                    {{ row[column.data] }}
                                </td>
                                <td v-else class="px-6 flex mr-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div v-for="action in column.actions">
                                        <button @click="$emit('edit-row', row)" class="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center" v-if="action.type === 'edit'"><i :class="action.icon"></i></button>
                                        <button
                                            @click="$emit('activate-row', row)"
                                            class="mr-2 text-white focus:outline-none focus:ring-4 font-medium rounded-md text-sm px-2 py-1 text-center"
                                            :class="{'bg-green-700 hover:bg-green-800 focus:ring-green-300': !row.is_active, 'bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-800': row.is_active}"
                                            v-if="action.type === 'activate'"
                                        >
                                            <i :class="action.icon"></i>
                                        </button>
                                        <button @click="$emit('delete-row', row)" class="mr-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 text-center" v-if="action.type === 'delete'"><i :class="action.icon"></i></button>
                                        <button @click="$emit('details-row', row)" class="mr-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-md text-sm px-2 py-1 text-center" v-if="action.type === 'details'"><i :class="action.icon"></i></button>
                                    </div>
                                </td>
                            </template>
                        </tr>
                        </tbody>
                    </table>
                    <nav class="flex items-center flex-col md:flex-row md:justify-between pt-4 mb-5" aria-label="Table navigation">
                        <span class="text-sm font-normal text-gray-500 mb-5 md:mb-0 dark:text-gray-400">{{$t('tables.labels.showing')}} <span class="font-semibold text-gray-900 dark:text-white">{{data.from}} - {{data.to}}</span> {{$t('tables.labels.of')}} <span class="font-semibold text-gray-900 dark:text-white">{{data.total}}</span></span>
                        <ul class="inline-flex items-center -space-x-px">
                            <li v-if="data.current_page !== 1">
                                <a :href="data.first_page_url" class="px-1 py-1 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
<!--                                    <span class="sr-only">{{$t('tables.labels.previous')}} </span>-->
<!--                                    <span class="w-5 h-5">{{$t('tables.labels.first')}} </span>-->
                                    <span class="sr-only"><i class="fa-solid fa-angle-left"></i></span>
                                    <span class="w-5 h-5"><i class="fa-solid fa-angles-left"></i></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    :href="pag.url"
                                    v-for="pag in paginate"
                                    :key="pag.page"
                                    :class="{'text-blue-600 border border-blue-300 bg-blue-50': pag.page === data.current_page, 'text-gray-500': pag.page !== data.current_page}"
                                    class="px-2 py-1 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{pag.page}}
                                </a>
                            </li>
                            <li v-if="data.current_page !== data.last_page">
                                <a :href="data.last_page_url" class="px-1 py-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only"><i class="fa-solid fa-chevron-right"></i></span>
                                    <span class="w-5 h-5"><i class="fa-solid fa-angles-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from "vue";
    import {usePage, router} from "@inertiajs/vue3";

    const {data, routeNewElement, columns} = defineProps({
        data: {
            type: Object,
            required: true
        },
        routeNewElement: {
            type: String
        },
        columns: {
            type: Array,
            required: true
        },
        showNewElement: {
            type: Boolean,
            default: true
        }
    })

    const {url} = usePage()
    const per_page = ref(data.per_page)
    const search = ref(usePage().props.search)
    const emit = defineEmits(['searchedData', 'activate-row', 'delete-row', 'details-row'])
    const paginate = []
    for (let i = 1; i <= data.last_page; i ++ ) {
        paginate.push({
            page: i,
            url: data.path + '?page=' + i
        })
    }
    const searchData = () => {
        router.visit(url, {
            data: {
                per_page: per_page.value,
                search: search.value
            },
            only: ['data', 'search', 'users'],
            preserveState: true,
            onSuccess: page => {
                emit('searchedData', page.props.data)
                // data.value = page.props.users
            }
        })
    }
    const change_per_page = () => {
        router.visit(url, {
            data: {
                per_page: per_page.value,
                search: search.value
            }
        })
    }
</script>

<style scoped>

</style>
