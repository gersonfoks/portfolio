<script lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";
import projects from "@/data/AiForGoodProjects";
import type {Project} from "@/data/Project";


export default {
    components: {ProjectCard,},


    data() {
        return {
            projects: projects as Project[]
        };
    },
}
</script>

<template>
    <section class="hero is-center">
        <div class="hero-body">
            <p class="title has-text-centered">
                Ai For Good Projects
            </p>

            <p class="has-text-centered">
                Applying my programming and machine learning skills to help solve problems in the world
            </p>
        </div>
    </section>

    <div class="section">
        <div class="columns is-multiline is-centered">
            <div class="column is-half-mobile is-offset-one-quarter-mobile is-half-tablet is-one-quarter-desktop" v-for="project in projects" :key="project.title">
                <ProjectCard :project="project"/>

            </div>
        </div>
    </div>

</template>
