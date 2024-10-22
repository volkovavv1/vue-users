<script>
import axios from "axios";

import { BASE_URL } from "@/utils/constants";

import UserPreview from "./UserPreview.vue";

export default {
  name: "AllUsers",
  components: {
    UserPreview,
  },
  data() {
    return {
      users: [],
      isErr: false,
    };
  },
  mounted() {
    axios
      .get(`${BASE_URL}/users`)
      .catch((error) => {
        if (error.response) {
          this.isErr = true;
          console.log(error.response.status);
        }
      })
      .then((res) => (this.users = res.data));
  },
};
</script>

<template>
  <section class="users-container">
    <h1>All users</h1>
    <div v-if="this.isErr" class="error">
      Sorry, we have an error. Please, try again later!
    </div>
    <UserPreview v-for="(user, id) in users" :key="id" :user="user" />
  </section>
</template>

<style scoped>
h1 {
  width: fit-content;
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 3rem;
  margin: 0 auto;
}

h3 {
  margin: 2rem 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 0.5rem;
}

@media screen and (max-width: 600px) {
}
</style>
