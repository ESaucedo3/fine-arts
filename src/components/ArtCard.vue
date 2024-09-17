<script setup>

import { Art } from '@/models/Art.js';
import { artsService } from '@/services/ArtsService.js';
import Pop from '@/utils/Pop.js';

  defineProps({
    artwork: { type: Art, required: true }
  })

  async function admire(artId) {
    try {
      await artsService.admire(artId);
    }
    catch (e){
      Pop.meow(e);
    }
  }
</script>


<template>
  <div class="col-6 col-md-3"> 
    <div class="card h-fit">
      <img class="img-fluid position-relative selectable" :src="artwork.smallImg" data-bs-toggle="modal" data-bs-target="#artDetails" alt="Gud Art">
      <button @click="admire(artwork.id)" class="admire position-absolute top-0 end-0 me-1 mt-1" type="button">👏<br>{{ artwork.admirers.length }}</button>
    </div>
  </div>

  <div class="modal fade" id="artDetails" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Art</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12 w-75">
                <img class="img-fluid mb-2" :src="artwork.regularImg" alt="TrueArt">
              </div>
              <div class="col-12">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perferendis laborum eos quos. Id assumenda earum temporibus sint dolorum, iure beatae laborum, soluta ullam vel, aliquam sit ut veniam maxime.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
  .admire {
    background-color: azure;
    border-radius: 50%;
  }
</style>