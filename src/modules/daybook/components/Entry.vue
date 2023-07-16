<template>
  <div
    class="entry-container mb-2 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })">
    <!-- Titulo -->
    <div class="d-flex entry-title">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ yearDay }}</span>
    </div>
    <!-- Descripcion -->
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  export default {
    props: {
      entry: {
        type: Object,
        required: true,
      },
    },
    computed: {
      shortText() {
        return this.entry.text.length > 100
          ? `${this.entry.text.substring(0, 100)}...`
          : this.entry.text;
      },
      day() {
        const date = new Date(this.entry.date);
        return date.getDate();
      },
      month() {
        const date = new Date(this.entry.date);
        return months[date.getMonth()];
      },
      yearDay() {
        const date = new Date(this.entry.date);
        return `${date.getFullYear()}, ${days[date.getDay()]}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .entry-container {
    background-color: #fff;
    border-radius: 5px;
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: lighten($color: #198754, $amount: 65);
      transform: scale(1.02);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      transition: 0.2s all ease-in;
    }
  }

  .entry-description {
    color: #212529;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.4;
  }
</style>
