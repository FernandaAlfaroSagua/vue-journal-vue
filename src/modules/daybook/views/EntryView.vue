<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2 pb-0">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-3 fs-4 fw-light">{{ yearDay }}</span>
      </div>
      <div>
        <input
          type="file"
          @change="onSelectedImage"
          ref="imageSelector"
          v-show="false"
          accept="image/png, image/jpeg" />
        <button
          v-if="entry.id"
          class="btn btn-danger mx-2"
          @click="onDeleteEntry">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary" @click="onSelectImage">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea
        v-model="entry.text"
        class="form-control"
        rows="5"
        placeholder="¿Qué sucedio hoy?"></textarea>
    </div>
    <img
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="entry-picture"
      class="img-thumbnail" />
    <img
      v-if="localImage"
      :src="localImage"
      alt="entry-picture"
      class="img-thumbnail" />
  </template>
  <Fab icon="fa-save" @on:click="saveEntry" />
</template>

<script>
  import Swal from "sweetalert2";
  import { defineAsyncComponent } from "vue";
  import { mapActions, mapGetters } from "vuex";

  import getDayMonthYear from "../helpers/getDayMonthYear";
  import uploadImage from "../helpers/uploadImage";

  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },

    components: {
      Fab: defineAsyncComponent(() =>
        import(/* webpackChunkName: "Fab" */ "@/modules/daybook/components/Fab")
      ),
    },
    data() {
      return {
        entry: null,
        localImage: null,
        file: null,
      };
    },
    computed: {
      ...mapGetters("journal", ["getEntryById"]),
      day() {
        const { day } = getDayMonthYear(this.entry.date);
        return day;
      },
      month() {
        const { month } = getDayMonthYear(this.entry.date);
        return month;
      },
      yearDay() {
        const { yearDay } = getDayMonthYear(this.entry.date);
        return yearDay;
      },
    },

    methods: {
      ...mapActions("journal", [
        "updateEntry",
        "loadEntries",
        "createEntry",
        "deleteEntry",
      ]),
      loadEntry() {
        let entry;
        if (this.id === "new") {
          entry = {
            date: new Date().getTime(),
            text: "",
            picture: null,
          };
        } else {
          entry = this.getEntryById(this.id);
          if (!entry) {
            return this.$router.push({ name: "no-entry" });
          }
        }
        this.entry = entry;
      },
      async saveEntry() {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();

        const picture = await uploadImage(this.file);
        this.entry.picture = picture;

        if (this.entry.id) {
          await this.updateEntry(this.entry);
        } else {
          const id = await this.createEntry(this.entry);
          this.$router.push({ name: "entry", params: { id } });
        }
        this.file = null;
        Swal.fire({
          title: "Guardado",
          text: "Entrada registrada correctamente",
          icon: "success",
        });
      },
      async onDeleteEntry() {
        const { isConfirmed } = await Swal.fire({
          title: "¿Está seguro?",
          text: "Una vez eliminado, no se podrá recuperar la entrada",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "No, cancelar",
        });
        if (isConfirmed) {
          new Swal({
            title: "Espere por favor",
            allowOutsideClick: false,
          });
          Swal.showLoading();
          await this.deleteEntry(this.entry.id);
          this.$router.push({ name: "no-entry" });
          Swal.fire({
            title: "Eliminado",
            text: "",
            icon: "success",
          });
        }
      },
      onSelectedImage(event) {
        const file = event.target.files[0];
        if (!file) {
          this.localImage = null;
          this.file = null;
          return;
        }
        this.file = file;
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.localImage = fileReader.result;
        };
        fileReader.readAsDataURL(file);
      },
      onSelectImage() {
        this.$refs.imageSelector.click();
      },
    },

    created() {
      this.loadEntry();
    },

    watch: {
      id() {
        this.loadEntry();
      },
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
