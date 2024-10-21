<script>
import { store } from "@/store/store";
import { BASE_URL } from "@/utils/constants";

import axios from "axios";

export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
      isErr: false,
    };
  },
  mounted() {
    if (localStorage.getItem("currentUserId")) {
      axios
        .get(`${BASE_URL}/posts`)
        .catch((error) => {
          if (error.response) {
            this.isErr = true;
            console.log(error.response.status);
          }
        })
        .then((res) => {
          res.data.forEach((post) => {
            post.userId === Number(localStorage.getItem("currentUserId"))
              ? this.posts.push(post)
              : "";
          });
        });
    } else {
      axios
        .get(`${BASE_URL}/posts`)
        .catch((error) => {
          if (error.response) {
            this.isErr = true;
            console.log(error.response.status);
          }
        })
        .then((res) => {
          res.data.forEach((post) => {
            post.userId === store.state.currentUserId
              ? this.posts.push(post)
              : "";
          });
        });
    }
  },
};
</script>

<template>
  <section class="posts">
    <div v-if="this.isErr" class="error">
      Sorry, we have an error. Please, try again later!
    </div>
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

@media screen and (max-width: 600px) {
  .posts {
    width: 20rem;
  }
}
</style>
