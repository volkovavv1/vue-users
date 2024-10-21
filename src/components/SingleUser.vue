<script>
import axios from "axios";

import { BASE_URL } from "@/utils/constants";
import { store } from "@/store/store";

import AllPosts from "./AllPosts.vue";
import UserAlbums from "./UserAlbums.vue";

export default {
  name: "SingleUser",
  data() {
    return {
      user: {},
      isErr: false,
    };
  },
  components: {
    UserAlbums,
    AllPosts,
  },
  mounted() {
    if (store.state.currentUserId !== null) {
      axios
        .get(`${BASE_URL}/users/${store.state.currentUserId}`)
        .catch((error) => {
          if (error.response) {
            this.isErr = true;
            console.log(error.response.status);
          }
        })
        .then((res) => (this.user = res.data))
        .then(localStorage.setItem("currentUserId", store.state.currentUserId));
    } else {
      axios
        .get(`${BASE_URL}/users/${localStorage.getItem("currentUserId")}`)
        .then((res) => (this.user = res.data));
      store.commit("setUserId", Number(localStorage.getItem("currentUserId")));
    }
  },
};
</script>

<template>
  <div class="wrapper">
    <div v-if="this.isErr" class="error">
      Sorry, we have an error. Please, try again later!
    </div>
    <div class="user">
      <div class="credits">
        <div class="avatar">
          <p class="id">{{ user.id }}</p>
        </div>
        <div class="name">
          <p>{{ user.name }}</p>
          <span class="username">{{ user.username }}</span>
        </div>
      </div>
      <div class="contact">
        <ul>
          <li>Contacts</li>
          <li>{{ user.email }}</li>
          <li>{{ user.phone }}</li>
          <li>{{ user.website }}</li>
        </ul>

        <ul v-if="user.address">
          <li>Address</li>
          <li>{{ user.address.street }}</li>
          <li>{{ user.address.city }}</li>
          <li>{{ user.address.zipcode }}</li>
        </ul>

        <ul v-if="user.company">
          <li>Company</li>
          <li>{{ user.company.name }}</li>
          <li>{{ user.company.catchPhrase }}</li>
          <li>{{ user.company.bs }}</li>
        </ul>
      </div>
    </div>
    <div v-if="user.id" class="content-wrapper">
      <h3>{{ user.name }}'s photos:</h3>
      <div class="content">
        <UserAlbums />
      </div>
      <h3>{{ user.name }}'s posts:</h3>
      <div class="content">
        <AllPosts />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  width: 35rem;
  background-color: white;

  margin: 0 auto;
  padding: 1.2rem;

  border-radius: 30px;
  box-shadow: 0px 4px 16px 0px rgba(44, 50, 65, 0.08);
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

ul {
  list-style: none;
  padding: 1.2rem;
  border-bottom: 1px solid rgb(226, 226, 226);
}

ul > li:first-of-type {
  font-weight: bold;
}

.contact > ul:last-of-type {
  border-bottom: none;
}

.credits {
  display: flex;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.75rem;
  height: 3.75rem;

  border-radius: 50%;
  background-color: rgba(127, 236, 255, 0.699);
}

.id {
  margin-top: -0.2rem;
  font-size: 2rem;
  color: rgb(0, 155, 175);
}

.content-wrapper {
  padding: 6rem 6rem 0 6rem;
}

.content {
  padding-bottom: 2rem;
}

h3 {
  font-size: 1.8rem;
  padding-bottom: 2rem;
  text-align: center;
}

.post-title {
  font-size: 1.2rem;
  padding-bottom: 0.4rem;
}

.post-body {
  padding-bottom: 4rem;
}

@media screen and (max-width: 600px) {
  .user {
    width: 25rem;
  }
}
</style>
