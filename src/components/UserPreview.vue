<script>
import { store } from '@/store/store';

export default {
  name: 'UserPreview',
  props: {
    user: {
    type: [Object, null],
    required: true,
    },
  },
  methods: {
    setCurrentUser(user) {
      store.commit('setUser', user);

    }
  },
} 

</script>

<template>
  <div class="wrapper" v-on:click="setCurrentUser(user)">
    <div class="user">
    <div class="credits">
      <div class="image"></div>
      <div class="name">
        <p>{{ user.name }}</p>
        <span class="username">{{ user.username }}</span>
      </div>
    </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .user {
    width: 35rem;
    background-color: white;

    margin: 0 auto 2.2rem;
    padding: 1.2rem;

    border-radius: 30px;
    box-shadow: 0px 4px 16px 0px rgba(44, 50, 65, 0.08);
    cursor: pointer;
  }

  .name {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 0;
    margin: auto 1rem;

  }

  .username {
    font-weight: 400;
    font-size: 0.875rem;
    color: rgb(114, 114, 114);
    font-style: italic;
  }

  .credits {
    display: flex;
  }

  .image {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background-color: aquamarine;
  }
</style>
