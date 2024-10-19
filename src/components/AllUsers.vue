<script>
import axios from 'axios';

import { BASE_URL } from '@/utils/constants';

import UserPreview from './UserPreview.vue';

export default {
  name: 'AllUsers',
  components: {
    UserPreview,
  },
  data () {
    return {
      users: []
    }
  },
  mounted() {
    axios.get(`${BASE_URL}/users`).then(res => this.users = res.data)
  }
}

</script>

<template>
  <section class="users-container">
    <h1>All users</h1>
    <UserPreview v-for="(user, id) in users" :key="id" :user="user"/>
  </section>
</template>

<style scoped>
h1 {
  width: fit-content;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 3rem auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
