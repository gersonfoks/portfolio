<template>


  <div class="card equal-height">
    <div class="card-content">
      <p class="title is-5">{{ project.title }}</p>

      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="project.img_src" alt="Placeholder image">
        </figure>
      </div>

      <div class="content">
        <p>{{ project.description }}</p>
      </div>
      <router-link :to="project.page_link">Learn more</router-link>
    </div>
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

.card {
  margin-top: auto;
}

</style>


