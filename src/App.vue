<template>
  <main>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <h1 class="title">All users</h1>
    <section v-if="users" class="container">
      <section class="cards-wrapper">
        <AllUsers :users="users" />
      </section>
    </section>
  </main>
</template>

<script>
import AllUsers from './components/AllUsers.vue';

export default {
  name: 'App',
  components: {
    AllUsers
  }
}

const users = ''
const error = ''
const loading = ''

export function getUsers() {
  try {
    fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((data) => users.value = data)
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
