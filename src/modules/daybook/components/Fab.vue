<template>
  <button class="btn btn-primary" @click="$emit('on:click')">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
</style>
