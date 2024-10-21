<script>
import axios from "axios";

import UserPhotos from "./UserPhotos.vue";

import { BASE_URL } from "@/utils/constants";
import { store } from "@/store/store";

export default {
  name: "UserAlbums",
  components: {
    UserPhotos,
  },
  data() {
    return {
      albums: [],
      isErr: false,
    };
  },
  mounted() {
    if (localStorage.getItem("currentUserId")) {
      axios
        .get(`${BASE_URL}/albums`)
        .catch((error) => {
          if (error.response) {
            this.isErr = true;
            console.log(error.response.status);
          }
        })
        .then((res) => {
          res.data.forEach((album) => {
            album.userId == Number(localStorage.getItem("currentUserId"))
              ? this.albums.push(album)
              : "";
          });
        });
    } else {
      axios
        .get(`${BASE_URL}/albums`)
        .catch((error) => {
          if (error.response) {
            this.isErr = true;
            console.log(error.response.status);
          }
        })
        .then((res) => {
          res.data.forEach((album) => {
            album.userId == store.state.currentUserId
              ? this.albums.push(album)
              : "";
          });
        });
    }
  },
};
</script>

<template>
  <section class="wrapper">
    <div v-if="this.isErr" class="error">
      Sorry, we have an error. Please, try again later!
    </div>
    <div class="album" v-for="(album, id) in albums" :key="id">
      <p class="title">Album "{{ album.title }}"</p>
      <UserPhotos :albumId="Number(album.id)" />
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
  font-size: 1.5rem;
  text-align: center;
  width: 40rem;
  padding-bottom: 3rem;
}

@media screen and (max-width: 600px) {
  .title {
    width: 20rem;
  }

  .carousel {
    width: 25rem;
    height: 14rem;
  }
}
</style>
