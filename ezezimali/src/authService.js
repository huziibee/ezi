import { PublicClientApplication } from "@azure/msal-browser";
import { reactive } from "vue";


const msalConfig = {
    auth: {
        clientId: 'deb9cf48-2bd2-49a9-886f-f733de947583',
        authority: 'https://login.microsoftonline.com/4b1b908c-5582-4377-ba07-a36d65e34934',
        redirectUri: window.location.origin,
        postLogoutUri: window.location.origin
      },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
    }
};

export const graphScores = {
    scopes: ["user.read", "openid", "profile"],
};

export const state = reactive({
    isAuthenticated: false,
    user: null
});

export const myMSALObj = new PublicClientApplication(msalConfig);



