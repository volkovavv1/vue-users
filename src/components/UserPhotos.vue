<script>
import axios from 'axios';

import { BASE_URL } from '@/utils/constants';

export default {
  name: 'UserPhotos',
  data () {
    return {
      photos: []
    }
  },
  props: {
    albumId: {
    type: [Number, null],
    required: true,
    },
  },
  mounted() {
    axios.get(`${BASE_URL}/albums/${albumId}/photos`).then(res => this.photos = res.photos);
    this.photos.length = 5;
  }
} 

</script>

<template>
  <div class="wrapper">
    <div class="carousel">
      <div class="photo">
        <img v-for="(photo, id) in photos" :key="id" :src=photo.url :alt=photo.title>
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