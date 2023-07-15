<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab icon="fa-plus" />
</template>

<script>
  import { defineAsyncComponent } from "vue";
  export default {
    components: {
      Fab: defineAsyncComponent(() =>
        import(/* webpackChunkName: "Fab" */ "@/modules/daybook/components/Fab")
      ),
    },
  };
</script>

<style lang="scss" scoped>
  div {
    height: 100%;
    width: 100%;
  }
</style>
