<template>
  <main>
    <!-- <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div> -->

    <section class="container">
      <section class="usercards-wrapper">
        <AllUsers/>
      </section>
    </section>
  </main>
</template>

<script>
// import { createMemoryHistory, createRouter } from 'vue-router';
import AllUsers from './components/AllUsers.vue';
// import SingleUser from './components/SingleUser.vue';

export default {
  name: 'App',
  components: {
    AllUsers,
  }
}

// const routes = [
//   // { path: '/', component: App },
//   { path: '/user', component: SingleUser },
// ]

// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })

// createApp(App)
//   .use(router)
//   .mount('#app')

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  max-width: 1090px;
  margin: 0 auto;
}

body {
  background-color: #f5f6f7;
}

</style>
