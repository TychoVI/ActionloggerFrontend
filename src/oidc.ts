import {createOidcAuth, LogLevel, SignInType} from "vue-oidc-client/vue3";

const appUrl = import.meta.env.VITE_APP_URL

const mainOidc = createOidcAuth('main', SignInType.Window, appUrl , {
    authority: import.meta.env.VITE_OIDC_AUTHORITY,
    client_id: import.meta.env.VITE_OIDC_CLIENTID,
    response_type: 'code',
    scope: 'openid profile email',
    prompt: 'login'
},
    console,
    LogLevel.Debug);

export default mainOidc