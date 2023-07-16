<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar entradas"
        v-model="term" />
    </div>
    <div class="my-2 d-flex flex-column">
      <button
        class="btn btn-primary mx-2"
        @click="$router.push({ name: 'entry', params: { id: 'new' } })">
        <i class="fa fa-plus-circle"></i> Nueva Entrada
      </button>
    </div>
    <div class="entry-scrollarea m-2">
      <Entry v-for="entry in entriesByTerm" :entry="entry" :key="entry.id">
      </Entry>
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";
  import { mapGetters } from "vuex";
  export default {
    components: {
      Entry: defineAsyncComponent(() => import("../components/Entry.vue")),
    },

    computed: {
      ...mapGetters("journal", ["getEntriesByTerm"]),
      entriesByTerm() {
        return this.getEntriesByTerm(this.term);
      },
    },

    data() {
      return {
        term: "",
      };
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
