<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entradas" />
    </div>
    <div class="entry-scrollarea m-2">
      <Entry v-for="item in 50" :key="item"> </Entry>
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";
  export default {
    components: {
      Entry: defineAsyncComponent(() => import("../components/Entry.vue")),
    },
  };
</script>

<style lang="scss" scoped>
  input {
    border: none;
    border-bottom: 1px solid #2c3e50;
    border-radius: 0;
    box-shadow: none;
    outline: none;
  }
  .entry-list-container {
    background-color: #f3f3f3;
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
    width: 100%;
  }
  .entry-scrollarea {
    height: calc(100vh - 110px);
    overflow: auto;
  }
</style>
