<template>
  <main>
    <!-- <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div> -->

    <section class="container">
      <router-link to="/">
        <header>AllUsers</header>
      </router-link>
      <router-view />
    </section>
  </main>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  font-size: 20px;
}

.container {
  max-width: 1090px;
  margin: 0 auto;
}

body {
  background-color: #f5f6f7;
}

header {
  position: fixed;
  background-color: #c1cbd4;
  width: 100%;
  height: 4.5rem;
  padding: 1rem;
}

@media screen and (min-width: 900px) {

}
</style>
