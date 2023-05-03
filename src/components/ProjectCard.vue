<template>


  <div class="card equal-height">
    <div class="card-content">
      <p class="title is-5">{{ project.title }}</p>

      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="project.img_src" alt="Placeholder image">
        </figure>
      </div>

      <div class="card-content ">
        <p>{{ project.description }}</p>

      </div>


    </div>

    <footer class="card-footer">
      <div class="card-footer-item">
        <router-link :to="project.page_link">Learn more</router-link>
      </div>

    </footer>

  </div>
</template>

<script lang="ts">


import {Project} from "@/data/Project";

export default {
  props: {
    project: {
      type: Project,
      required: true
    },
  }
}


</script>

<style>

.equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.equal-height > .card-content {
  margin-bottom: auto;
}

.equal-height > .card-footer {
  margin-top: auto;
}

</style>


