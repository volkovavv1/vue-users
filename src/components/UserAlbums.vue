<script>
import axios from 'axios';

import UserPhotos from './UserPhotos.vue';

import { BASE_URL } from '@/utils/constants';
import { store } from '@/store/store';

export default {
  name: 'UserAlbums',
  components: {
    UserPhotos,
  },
  data () {
    return {
      albums: []
    }
  },
  mounted() {
    axios.get(`${BASE_URL}/albums`).then(res => {
      res.data.forEach(album => {
      album.userId === store.state.currentUserId ? this.albums.push(album) : ""
    })
    })
  }
} 
</script>

<template>
  <section class="wrapper">
    <div class="album" v-for="(album, id) in albums" :key="id">
      <p class="title">
        {{ album.title }}
      </p>
    <UserPhotos v-if="id" :albumId="id"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }

  .album {
    width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    width: 40rem;
    padding-bottom: 3rem;
  }
</style>