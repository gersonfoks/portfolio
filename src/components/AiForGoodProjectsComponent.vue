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
        </div>
    </section>

    <div class="section">
        <div class="columns is-multiline">
            <div class="column is-one-third" v-for="project in projects" :key="project.title">
                <ProjectCard :project="project"/>

            </div>
        </div>
    </div>

</template>
