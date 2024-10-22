<template>
  <main>
    <section class="container">
      <header>
        <router-link to="/" class="router-link">
          <p class="link">Home</p>
        </router-link>
      </header>
      <router-view />
      <footer>
        <a href="https://github.com/volkovavv1">volkovavv1, 2024 </a>
      </footer>
    </section>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, sans-serif;
  font-size: 20px;
}

.container {
  max-width: 1090px;
  padding-top: 6rem;
  margin: 0 auto;
  position: relative;
}

body {
  background-color: #f5f6f7;
}

header,
footer {
  background-color: #c1cbd4ba;
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  display: flex;
}

header {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  padding-left: 4rem;
}

footer {
  display: flex;
  align-items: center;
  padding-left: 4rem;
}

.link {
  width: 5.5rem;
  font-size: 2rem;
  color: rgb(23, 22, 54);
  cursor: pointer;
}

a {
  color: rgb(23, 22, 54);
  text-decoration: none;
  cursor: pointer;
}

.error {
  color: rgb(148, 0, 0);
}

@media screen and (max-width: 900px) {
  * {
    font-size: 14px;
  }
}
</style>
