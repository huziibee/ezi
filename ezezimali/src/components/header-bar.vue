<template>
      <header class="p-8 pb-0">
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <router-link to="./" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="../assets/logo.png"  height="70" width="70" alt="Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ezezimali</span>
  </router-link>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img height="50" width="50" class="rounded-full h-0" src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="z-50 p-4 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span  class="block text-sm text-gray-900 dark:text-white"> {{ userName }} </span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ userEmail }}</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <button v-if="userName=='User'" @click="handleLogin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign in</button>
            <button v-else @click="handleLogout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
          </li>
        </ul>
      </div>

  </div>
 
  </div>
</nav>

     </header>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { useAuth } from '../useAuth';
  import { myMSALObj, state } from '../authService';

import { mapGetters } from 'vuex';
  
  export default {
    name: 'HeaderBar',
    computed: {
    ...mapGetters([
      'getUser', 'isAuthenticated'
    ]),
    userName() {
      return this.getUser ? this.getUser.name : 'User';
    },
    userEmail() {
        
        
      return this.getUser ? this.getUser.username : 'example@gmail.com';},
  },
    setup() {
      const { login, logout, handleRedirect } = useAuth();

  
      const handleLogin = async () => {
          await login();

          

      };
  
      const handleLogout = async () => {
        await logout();
      };
  
      const initialize = async () => {
        try {
          await myMSALObj.initialize();
        } catch (error) {
          console.error("Initialization error:", error);
        }
      };
  
      onMounted(async () => {
        await initialize();
        handleRedirect();
      });
  
      return {
        handleLogin,
        handleLogout
      };
    }
  }
  </script>