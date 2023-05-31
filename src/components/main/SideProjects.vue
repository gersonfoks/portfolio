<template>
    <div>
        <section class="hero is-center">
            <div class="hero-body">
                <p class="title has-text-centered">
                    Side-projects
                </p>
                <p class="subtitle has-text-centered">
                    Exploring new technologies and ideas on the side
                </p>
            </div>
        </section>

        <section>
            <div class="container pl-6 pr-6 pb-6">
                <div class="columns is-multiline is-centered">
                    <div class="column is-two-thirds"
                         v-for="(project, index) in sideProjects" :key="project.title">
                        <SideProjectCard :project="project" :reversed="index % 2 === 1"/>
                    </div>

                </div>


            </div>

        </section>


    </div>


</template>


<script lang="ts">
import SideProjectCard from "@/components/SideProjectCard.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import sideProjects from "@/data/SideProjects";

import type {SideProject} from "@/data/SideProject";

export default {
    name: 'SideProjectsComponent',
    data() {
        return {
            sideProjects: sideProjects as SideProject[]
        };
    },
    components: {ProjectCard, SideProjectCard},
};
</script>


