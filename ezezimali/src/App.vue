<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import headerBar from './components/header-bar.vue'

onMounted
(() => {
    initFlowbite();
})



</script>

<template>
  
 

     <body>

      <header-bar />

 
      <RouterView />
      <footer>
        <article class="max-w-screen-xl mx-auto p-8">
          <p class="text-center text-gray-500">© 2024 Ezezimali. All rights reserved.</p>
        </article>
      </footer>
     </body>

</template>

<style scoped>

footer{
  height: 1rem;
}


body{
  margin: 0;
  padding: 0;
  overflow-y: auto;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100vh;

}
body::-webkit-scrollbar {
    display: none;
}


#logo{
  width: 200px;
  height: 60px;
}




</style>
