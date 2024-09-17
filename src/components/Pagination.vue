<script setup>
  import { AppState } from '@/AppState.js';
import { artsService } from '@/services/ArtsService.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';

  const currentPage = computed(() => AppState.currentPage);
  const totalPages = computed(() => AppState.totalPages);

  async function changePage(pageNumber) {
    try {
      await artsService.changePage(pageNumber);
    }
    catch (error){
      Pop.meow(error);
    }
  }

</script>


<template>
  <div class="d-flex flex-column align-items-center text-center pt-3">
    <p><i class="fa-solid fa-book fa-2xl"></i><br><br>{{ currentPage }} of {{ totalPages }}</p>
    <button @click="changePage(currentPage + 1)" class="btn btn-outline-dark rounded-pill px-4 mb-2" type="button">Next</button>
    <button @click="changePage(currentPage - 1)" :disabled="currentPage < 2" class="btn btn-outline-dark rounded-pill px-4" type="button">Previous</button>
  </div>
</template>


<style lang="scss" scoped>

</style>