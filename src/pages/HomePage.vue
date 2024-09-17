<script setup>
import { AppState } from '@/AppState.js';
import ArtCard from '@/components/ArtCard.vue';
import Pagination from '@/components/Pagination.vue';
import { artsService } from '@/services/ArtsService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

  const arts = computed(() => AppState.arts);

  async function getArts() {
    try {
      await artsService.getArts();
    }
    catch (error){
      Pop.meow(error);
    }
  }

  onMounted(() => {
    getArts()
  })
</script>

<template>
  <section class="container-fluid">
    <div class="row">
      <!-- NOTE Account | Disabled since not using -->
      <div class="col-md-2 d-flex flex-column justify-content-between">
        <!-- <div class="d-flex flex-column justify-content-center">
          <img class="guy" height="100" src="https://images.unsplash.com/photo-1523307730650-594bc63f9d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3V5JTIwc2hhZGVzfGVufDB8fDB8fHww" alt="Guy">
          <p class="text-center">What</p>
          <div class="text-center">
            <button class="btn btn-outline-dark rounded-pill px-2" type="button">Logout</button>
          </div>
        </div> -->

        <!-- NOTE Pagination -->
        <Pagination />
      </div>
      <div class="col-md-10">
        <div class="art-design">
          <h4>Institute Of Art</h4>
          <section class="row gy-2">
            <ArtCard v-for="art in arts" :key="art.id" :artwork="art" />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .art-design {
    padding: 1rem;
    background-color: azure;
  }

  .guy {
    height: 40%;
    width: 25%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    margin: 0 auto;
  }
</style>
