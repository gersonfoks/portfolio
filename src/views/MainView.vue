<script lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import projects from "@/data/AiForGoodProjects";
import type {Project} from "@/data/Project";
import ResearchComponent from "@/components/main/ResearchComponent.vue";
import AiForGoodProjectsComponent from "@/components/main/AiForGoodProjectsComponent.vue";


export default {
    components: {AiForGoodProjectsComponent, ResearchComponent},


    data() {
        return {
            projects: projects as Project[]
        };
    },
}
</script>

<template>
    <div class="container">
        <AiForGoodProjectsComponent/>

        <ResearchComponent/>
        <section class="hero is-center">
            <div class="hero-body">
                <p class="title has-text-centered">
                    Miscellaneous
                </p>
            </div>
        </section>




    </div>
</template>