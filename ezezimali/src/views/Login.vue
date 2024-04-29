
<script>

export default {
  name: 'Login',
  data() {
    return {
      state: {
        isAuthenticated: false,
        user: null
      }
    };
  },
  methods: {
    getCookie(name) {
    let cookies = document.cookie.split('; ');
    let cookie = cookies.find(row => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}
,
    async handleLogin() {
      try {
        const account = await this.$auth.login();
        console.log('Logged in as:', account);
        this.state.isAuthenticated = true;
        this.state.user = account;
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    async handleLogout() {
      try {
        await this.$auth.logout();
        console.log('Logged out');
        this.state.isAuthenticated = false;
        this.state.user = null;
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  }
};
</script>

<template>

<!-- <div v-if="state.isAuthenticated">
<h1>hiii {{ state.user.name }}</h1>
<button type="submit" @click="handleLogout">logout</button>
</div>

<div v-else> 
</div> -->
<button type="submit" @click="getCookie('cookieName')">Login</button>

    <section id="login-section">
        <article>
            <h2 id="login-cta-heading">
                      Seamless Login for Exclusive Access
                    </h2>
                    <p class="sub-text">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
                    <p class="sub-text">Don't have an account <RouterLink to="/register" id="register-cta-text">Register here</RouterLink></p>
        </article>

        <form id="login-form">
                    <h3 id="sign-in-heading">Sign in</h3>
                      <input name="email" type="email" autocomplete="email" required placeholder="Email address" />
                      <input name="password" type="password" autocomplete="current-password" required placeholder="Password" />

                      <button type="submit" >Log in</button>
                    <p class="sub-text-2">or continue with</p>
                    <article class="flex-center gap-2">
                      <button type="button"
                        class="border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" class="inline" viewBox="0 0 512 512">
                          <path fill="#fbbd00"
                            d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                            data-original="#fbbd00" />
                          <path fill="#0f9d58"
                            d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                            data-original="#0f9d58" />
                          <path fill="#31aa52"
                            d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                            data-original="#31aa52" />
                          <path fill="#3c79e6"
                            d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                            data-original="#3c79e6" />
                          <path fill="#cf2d48"
                            d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                            data-original="#cf2d48" />
                          <path fill="#eb4132"
                            d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                            data-original="#eb4132" />
                        </svg>
                      </button>
                      <button type="button"
                        class="border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#000" viewBox="0 0 22.773 22.773">
                          <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" data-original="#000000"></path>
                        </svg>
                      </button>
                      <button type="button"
                        class="border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#007bff" viewBox="0 0 167.657 167.657">
                          <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z" data-original="#010002"></path>
                        </svg>
                      </button>
                    </article>
                  </form>
    </section>
    <!-- <article class="pt-24 px-16 flex pb-16 justify-center items-center">

              
                <article class=" flex  flex-col md:flex-row items-center gap-16 ">
                  <article class="max-md:text-center">
                    <h2 class="lg:text-5xl text-4xl font-extrabold lg:leading-[55px]">
                      Seamless Login for Exclusive Access
                    </h2>
                    <p class="text-sm mt-6">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
                    <p class="text-sm mt-10">Don't have an account <RouterLink to="/register" class="text-green-500 font-semibold hover:underline ml-1">Register here</RouterLink></p>
                  </article>
                  <form class="space-y-6  max-w-md md:ml-auto max-md:mx-auto w-full">
                    <h3 class="text-3xl font-extrabold mb-8 max-md:text-center">
                      Sign in
                    </h3>
                      <input name="email" type="email" autocomplete="email" required class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600" placeholder="Email address" />
                      <input name="password" type="password" autocomplete="current-password" required class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600" placeholder="Password" />

                      <button type="submit" class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Log in
                      </button>
                    <p class="my-10 text-sm text-gray-400 text-center">or continue with</p>
                    <article class="space-x-6 flex justify-center">
                      <button type="button"
                        class="border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" class="inline" viewBox="0 0 512 512">
                          <path fill="#fbbd00"
                            d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                            data-original="#fbbd00" />
                          <path fill="#0f9d58"
                            d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                            data-original="#0f9d58" />
                          <path fill="#31aa52"
                            d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                            data-original="#31aa52" />
                          <path fill="#3c79e6"
                            d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                            data-original="#3c79e6" />
                          <path fill="#cf2d48"
                            d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                            data-original="#cf2d48" />
                          <path fill="#eb4132"
                            d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                            data-original="#eb4132" />
                        </svg>
                      </button>
                      <button type="button"
                        class="border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#000" viewBox="0 0 22.773 22.773">
                          <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" data-original="#000000"></path>
                        </svg>
                      </button>
                      <button type="button"
                        class="border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#007bff" viewBox="0 0 167.657 167.657">
                          <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z" data-original="#010002"></path>
                        </svg>
                      </button>
                    </article>
                  </form>
                </article>
            
            

    </article> -->
</template>



<!-- <script>

import { authService } from '../authService';

export default {

  methods: {
    async login() {
      try {
        const account = await authService.login();
        console.log('Logged in as:', account);
        // Optionally, you can redirect the user to another page after login
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    async logout() {
      try {
        await authService.logout();
        console.log('Logged out');
        // Optionally, you can redirect the user to another page after logout
        this.$router.push('/');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  }
};
</script> -->

<style scoped>

#login-section{
    background-color: #f6f7f8;
    height: 80vh;
    width: 100%;
    display: flex;
    padding: 10rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
#register-cta-text{
    color: #00b34b;
    font-weight: 600;
    text-decoration: none;

}

#register-cta-text:hover{
    text-decoration: underline;
}
.gap-2{
    gap: 2rem;
}

/* Default style */
#login-cta-heading {
    font-size: 2.25rem; 
    font-weight: 800;
    line-height: 1.3; 
}

/* Responsive style for large screens (lg breakpoint) */
@media (min-width: 1024px) {
    #login-cta-heading {
        font-size: 3rem; /* Equivalent to Tailwind's lg:text-5xl */
        line-height: 55px; /* Equivalent to Tailwind's lg:leading-[55px] */
    }
}


.sub-text{
    font-size: 0.875rem;
    margin-top: 1.5rem;
}
.sub-text-2{
    font-size: 0.875rem;
    margin-top: 1.5rem;
    text-align: center;

}
button[type="submit"] {
    width: 100%;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 123, 255, 0.1), 0 1px 3px rgba(0, 123, 255, 0.1);
    transition: background-color 0.3s ease;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}


#sign-in-heading{
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
}

#login-form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
}
</style>../config/authService../authService