<script>
import { store } from "@/store/store";

import { router } from "@/utils/router";

export default {
  name: "UserPreview",
  props: {
    user: {
      type: [Object, null],
      required: true,
    },
  },
  methods: {
    setCurrentUserId: function (id) {
      store.commit("setUserId", id);
      router.push("/user");
    },
  },
};
</script>

<template>
  <div class="wrapper" v-on:click="setCurrentUserId(user.id)">
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
</style>
