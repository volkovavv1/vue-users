<script>
import axios from 'axios';

import { BASE_URL } from '@/utils/constants';

export default {
  name: 'UserPhotos',
  data () {
    return {
      photos: [],
      cards: [1, 2, 3, 4, 5],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  props: {
    albumId: {
    type: [Number, null],
    required: true,
    },
  },
  mounted() {
    axios.get(`${BASE_URL}/albums/${this.albumId}/photos`).then(res => this.photos = res.data);
    this.setStep()
    this.resetTranslate()
  }, 
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
    },

    next () {
      if (this.transitioning) return

      this.transitioning = true

      this.moveLeft()

      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },

    prev () {
      if (this.transitioning) return

      this.transitioning = true

      this.moveRight()

      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },

    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },

    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },

    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },

    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
} 
</script>

<template>
  <div class="wrapper">
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <div class="card" v-for="(photo, id) in photos" :key="id" >
          <img :src=photo.url :alt=photo.title>
        </div>
      </div>
    </div>
    <button @click="prev">prev</button>
    <button @click="next">next</button>
  </div>
</template>


<style lang="scss" scoped>
  .carousel {
    width: 170px;
    overflow: hidden;
  } 

  .inner {
    transition: transform 0.2s;
    white-space: nowrap;
  }

  .card {
    width: 40px;
    margin-right: 10px;
    display: inline-flex;
    height: 40px;
    color: white;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  button {
    margin-right: 5px;
    margin-top: 10px;
  }
</style>