import '@fortawesome/fontawesome-free/css/all.min.css'
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Global1';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const i18n = createI18n({
            legacy: false,
            locale: 'es',
            fallbackLocale: 'en',
            messages: {
                es: esMessages,
                en: enMessages
            }
        })
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

import 'flowbite/dist/flowbite.min'
import {createI18n} from "vue-i18n";
import {esMessages} from "../locales/es";
import {enMessages} from "../locales/en";
