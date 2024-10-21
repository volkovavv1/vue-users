<script>
import axios from "axios";

import { BASE_URL } from "@/utils/constants";

export default {
  name: "UserPhotos",
  data() {
    return {
      photos: [],
      currentIndex: 0,
      shouldPlay: false,
      interval: null,
      slides: [],
    };
  },
  props: {
    albumId: {
      type: [Number],
      required: true,
    },
  },
  methods: {
    showSlide(index) {
      if (index < 0) {
        this.currentIndex = 3;
      } else if (index >= 4) {
        this.currentIndex = 0;
      }

      this.slides = document.querySelectorAll(
        `.carousel-${this.albumId}-slide`
      );

      this.slides.forEach((slide) => {
        slide.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      });
    },
    autoplay() {
      this.interval = setInterval(() => {
        this.currentIndex++;
        this.showSlide(this.currentIndex);
      }, 3000);
    },
    stop() {
      clearInterval(this.interval);
    },
  },
  mounted() {
    if (this.albumId !== 0) {
      axios
        .get(`${BASE_URL}/albums/${this.albumId}/photos`)
        .catch((error) => {
          if (error.response) {
            this.isErr = true;
            console.log(error.response.status);
          }
        })
        .then((res) => {
          for (let i = 0; i < 5; i++) {
            this.photos.push(res.data[i]);
          }
        });
    }
    this.showSlide();
  },
};
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div
        :class="`carousel-${albumId}-slide`"
        v-for="(photo, id) in photos"
        :key="id"
      >
        <img :src="photo.url" :alt="photo.title" />
      </div>
    </div>
    <div class="buttons-container">
      <button
        class="prev"
        @click="
          () => {
            currentIndex--;
            this.showSlide(currentIndex);
          }
        "
      ></button>
      <button
        class="next"
        @click="
          () => {
            currentIndex++;
            this.showSlide(currentIndex);
          }
        "
      ></button>
    </div>
    <button
      class="autoplay"
      @click="
        () => {
          this.shouldPlay = !this.shouldPlay;
          if (this.shouldPlay) {
            this.autoplay();
          } else {
            this.stop();
          }
        }
      "
    >
      Toggle autoplay
    </button>
  </div>
</template>

<style lang="scss" scoped>
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
}

.carousel {
  width: 35rem;
  display: flex;

  height: 16rem;
}

.carousel > div {
  transition: transform 0.6s ease;
  flex: 0 0 50%;
}

img {
  width: 100%;
  height: 100%;
}

.buttons-container {
  display: flex;
  gap: 1rem;
  margin: 2rem 0 1rem 0;
}

.autoplay {
  padding: 0.3rem 0.3rem 0.5rem 0.3rem;
  width: 8rem;
  margin-bottom: 4rem;
  border-radius: 30px;
}

.prev,
.next {
  width: 1.6rem;
  height: 1.6rem;
  background-size: contain;
  border-radius: 50%;
  margin-right: 0.4rem;
  margin-top: 0.5rem;
}

.prev {
  background-image: url("../assets/left.png");
}

.next {
  background-image: url("../assets/right.png");
}

@media screen and (max-width: 600px) {
  .carousel {
    width: 25rem;
    height: 14rem;
  }
}
</style>
