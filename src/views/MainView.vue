<script lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {ProjectCard, HeaderComponent},

  data() {
    return {
      projects: [
        {
          "title": "Detecting Gunshots and Elephant Rumbles",
          "description": "This project explores the use of machine learning to detect gunshots and elephant rumbles from sound clips recorded in wildlife reserves. The goal is to track both elephants and poachers."
        },
        {
          title: "Preterm Baby Development and Light Exposure",
          description: "This project investigates the impact of light exposure on the development of preterm babies. " +
              "By analyzing data from neonatal intensive care units, we aim to identify potential correlations between light exposure and health outcomes for the babies."
        },
        {
          title: "Finding Heart Failures with ECG Scans",
          description: "During this project we explored the use of machine learning algorithms to detect heart failures using ECG scans. The goal is to create a reliable and accurate model for early diagnosis and intervention."
        },
        {
          title: "Autonomous Flying Drones for Wildlife Protection",
          description: "During this project we aimed to improve the autonomous capabilities of drones such that they can be used to protect wildlife from poaching"
        }


      ]
    };
  },
}
</script>

<template>
  <div class="container">
    <div class="section">
      <HeaderComponent/>
    </div>
    <section class="hero is-center">
      <div class="hero-body">
        <p class="title has-text-centered">
          Ai For Good Projects
        </p>

      </div>
    </section>

    <div class="section">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="project in projects" :key="project.title">
          <ProjectCard :title="project.title" :description="project.description"/>
        </div>
      </div>
    </div>

    <section class="hero is-center">
      <div class="hero-body">
        <p class="title has-text-centered">
          Research
        </p>
      </div>
    </section>


    <section class="hero is-center">
      <div class="hero-body">
        <p class="title has-text-centered">
          Miscellaneous
        </p>
      </div>
    </section>


  </div>
</template>