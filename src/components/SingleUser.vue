<template>
  <div class="user">
    <div class="user-info">
      <h2> {{ user.name }} </h2>
      <h3> {{ user.username }} </h3>
      <span class="user-photos">
      </span>
      <span class="user-posts">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleUser',
   props: {
    user: {
    type: [Object, null],
    required: true,
    },
  }
}

// const props = defineProps({
  
// })
</script>

<style scoped>

</style>
