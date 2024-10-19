<script>
import { store } from '@/store/store';
import { BASE_URL } from '@/utils/constants';

import axios from 'axios';

export default {
  name: 'AllPosts',
  data () {
    return {
      posts: []
    }
  },
  // methods: {
  //   setCurrentUser(user) {
  //     store.commit('setUser', user);
  //   }
  // },
  mounted() {
    axios.get(`${BASE_URL}/posts`).then(res => {
      res.data.forEach(post => {
      post.userId === store.state.currentUser.id ? this.posts.push(post) : ''
    });
    // this.posts.length = 5;
    })
    console.log(this.posts)
  }
} 

</script>

<template>
  <section class="posts">
    <div class="wrapper" v-for="(post, id) in this.posts" :key="id">
      <div class="post">
        <p class="title">{{ post.title }}</p>
        <p class="body">{{ post.body }}</p>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>

  .posts {
    width: 30rem;
    margin: 0 auto;
  }

  .post {
    padding-bottom: 3rem;
  }

  .title {
    font-weight: bold;
    font-size: 1rem;
  }

  .body {
    font-size: 0.875rem;
    color: rgb(101, 101, 117);
  }
</style>