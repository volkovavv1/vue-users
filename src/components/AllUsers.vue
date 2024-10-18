<script>
import SingleUser from './components/SingleUser.vue';

export default {
  name: 'AllUsers',
  components: {
    SingleUser
  }
}

const props = defineProps({
  user: {
    type: [Object, null],
    required: true,
  }
})

</script>

<template>
  <section class="users-container">
    <SingleUser v-for="(user, id) in users" :key="id" :user="user"/> 
  </section>
</template>

<style scoped>
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
