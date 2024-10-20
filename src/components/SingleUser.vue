<script>
import axios from 'axios';

import { BASE_URL } from '@/utils/constants';
import { store } from '@/store/store';

import AllPosts from './AllPosts.vue';
import UserAlbums from './UserAlbums.vue';

export default {
  name: 'SingleUser',
  data () {
    return {
      user: {}
    }
  },
  components: {
    UserAlbums,
    AllPosts,
  },
  mounted() {
    if (store.state.currentUserId !== null) {
      axios.get(`${BASE_URL}/users/${store.state.currentUserId}`).then(res => this.user = res.data);
      localStorage.setItem('currentUser', this.user)
    } else {
      this.user = localStorage.getItem('currentUser');
    }
  },
  // updated() {
  //   axios.get(`${BASE_URL}/users/${store.state.currentUserId}`).then(res => this.user = res.data);
  // }
  // methods: {
  //   getUser (a) {
  //     return store.state.currentUser[a]
  //   }
  // },
  // computed: {
  // myValue() { return store.state.currentUser }
  // },
} 
</script>

<template>
  <div class="wrapper">
    <div class="user">
    <div class="credits">
      <div class="image"></div>
      <div class="name">
        <p>{{ user.name }}</p>
        <!-- <span class="username">{{ getUser("username") }}</span> -->
      </div>
    </div>
    <div class="contact">
      <ul>
        <li>Contacts</li>
        <!-- <li>{{ getUser("email") }}</li>
        <li>{{ getUser("phone") }}</li>
        <li>{{ getUser("website") }}</li> -->
      </ul>

      <ul>
        <li>Address</li>
        <!-- <li>{{ getUser("address.street")}} </li> -->
        <!-- <li>{{ getUser("address.city"), getUser("address.zipcode")  }}</li>
        <li>{{ getUser("address.geo.lat"), getUser("address.geo.lng")  }}</li> -->
      </ul>
    
    <ul> 
      <li>Company</li>
      <!-- <li>{{ getUser("company.name") }}</li>
      <li>{{ getUser("company.catchPhrase") }}</li>
      <li>{{ getUser("company.bs") }}</li> -->
    </ul>
  </div>
    </div>
    <div class="content-wrapper">
      <!-- <h3>{{ getUser("name") }}'s photos: </h3> -->
      <div class="content">
        <UserAlbums />
      </div>
      <!-- <h3>{{ getUser("name") }}'s posts: </h3> -->
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

  .image {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background-color: aquamarine;
  }

  .content-wrapper {
    padding: 6rem;
  }

  .content {
    padding-bottom: 5rem;
  }

  h3 {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }

  .post-title {
    font-size: 1.2rem;
    padding-bottom: 0.4rem;
  }

  .post-body {
    padding-bottom: 4rem;
  }
</style>
