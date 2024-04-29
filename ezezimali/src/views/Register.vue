<template>
    <section class="register-container">
        <h1>Create an account on ezezimali</h1>
        <br>
        <form @submit.prevent="register" class="register-form">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Register</button>
        </form>
        <br>
        <article id="LoginCTA">
            <h3>Already have an account? </h3>
            <router-link to="/login">Login</router-link>
        </article>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            username: '',
            password: ''
        };
    },
    methods: {
        register() {
            // Perform registration logic here
            // For simplicity, let's just assume registration is successful
            // and navigate to the next page
            this.$router.push('/next-page');
        }
    }
};
</script>

<style scoped>
#LoginCTA {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 18rem;
}

.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

.register-form {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.register-form label {
    display: block;
    margin-bottom: 5px;
}

.register-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.register-form button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.register-form button:hover {
    background-color: #0056b3;
}
</style>