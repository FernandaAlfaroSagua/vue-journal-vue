<template>
  <div class="entry-title d-flex justify-content-between p-2 pb-0">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-3 fs-4 fw-light">2023, Jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea
      class="form-control"
      rows="5"
      placeholder="¿Qué sucedio hoy?"></textarea>
  </div>
  <Fab icon="fa-save" />
  <img
    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    alt="entry-picture"
    class="img-thumbnail" />
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
  textarea {
    resize: none;
    border: none;
    font-size: 20px;
    height: calc(100vh - 56px);
    background-color: lighten($color: #198754, $amount: 65);

    &:focus {
      outline: none;
      background-color: lighten($color: #198754, $amount: 65);
    }
  }

  img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }
</style>