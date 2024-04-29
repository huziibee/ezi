import {ref }  from 'vue'
import { myMSALObj, state } from './authService'
import store from './store';
// import { useAuthStore } from './stores/counter'

// const { isAuthenticated, user } = useAuthStore();

export function useAuth() {
    const isAuthenticated = ref(false);
    
    const login = async () => {
        try {
            if(!myMSALObj){
                throw new Error('MSAL instance not initialized');
            }

            const sss = await myMSALObj.loginRedirect();
            isAuthenticated.value = true;

            console.log(sss);
            
            console.log('Login successful');

            
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        try {
            if(!myMSALObj){
                throw new Error('MSAL instance not initialized');
            }

            await myMSALObj.logoutRedirect();
            isAuthenticated.value = false;
            store.commit('CLEAR_USER');
            console.log('Logout successful');
        } catch (error) {
            console.error(error);
        }
    }

    const handleRedirect = async () => {
        try {
            await myMSALObj.handleRedirectPromise();
            state.isAuthenticated = myMSALObj.getAllAccounts().length > 0;
            state.user = myMSALObj.getAllAccounts()[0];

            store.commit('SET_USER', state.user);
            console.log('Redirect successful', store.getters.isAuthenticated, store.getters.getUser);




        } catch (error) {
            console.error(error);
        }
    }

    return { isAuthenticated, login, logout, handleRedirect}
}