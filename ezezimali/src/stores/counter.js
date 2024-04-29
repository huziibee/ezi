import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useAuthStore = defineStore('auth', () => {
  // State: isAuthenticated and user details
  const isAuthenticated = ref(false);
  const user = ref(null);

  // Actions to update the state
  function login(userData) {
    isAuthenticated.value = true;
    user.value = userData;
  }

  function logout() {
    isAuthenticated.value = false;
    user.value = null;
  }

  // Provide state, actions, and other computed values to the store
  return { isAuthenticated, user, login, logout };
});
