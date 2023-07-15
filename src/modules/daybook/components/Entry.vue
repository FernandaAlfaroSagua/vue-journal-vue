<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })">
    <!-- Titulo -->
    <div class="d-flex entry-title">
      <span class="text-success fs-5 fw-bold">13</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2023, jueves</span>
    </div>
    <!-- Descripcion -->
    <div class="entry-description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nam
      dignissimos excepturi. Esse pariatur explicabo asperiores! Sint, obcaecati
      sit! Excepturi reprehenderit perspiciatis veniam minima vitae cumque
      magnam ipsa aspernatur similique?
    </div>
  </div>
</template>

<script>
  export default {};
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
