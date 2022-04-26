import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mainOidc from "@/oidc";

import ElementPlus from 'element-plus';
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";

import "@/core/plugins/prismjs";

mainOidc.startup().then(ok => {
    if (ok) {
        const app = createApp(App).use(router).use(createPinia())
        app.config.globalProperties.oidc = mainOidc;

        app.use(ElementPlus);

        initApexCharts(app);
        initInlineSvg(app);
        initVeeValidate();

        app.use(i18n);

        app.mount('#app')
    } else {
        console.log('Something went wrong with oidc init')
    }
});