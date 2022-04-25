import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mainOidc from "@/oidc";

mainOidc.startup().then(ok => {
    if (ok) {
        const app = createApp(App).use(router).use(createPinia())
        app.config.globalProperties.oidc = mainOidc;

        app.mount('#app')
    } else {
        console.log('Something went wrong with oidc init')
    }
});