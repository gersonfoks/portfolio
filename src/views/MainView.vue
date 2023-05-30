<script lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import projects from "@/data/AiForGoodProjects";
import type {Project} from "@/data/Project";
import ResearchComponent from "@/components/main/ResearchComponent.vue";
import AiForGoodProjectsComponent from "@/components/main/AiForGoodProjectsComponent.vue";
import AboutComponent from "@/components/main/AboutComponent.vue";


export default {
    components: {AboutComponent, AiForGoodProjectsComponent, ResearchComponent},


    data() {
        return {
            projects: projects as Project[]
        };
    },
}
</script>

<template>
    <div class="container">
        <AboutComponent/>
        <AiForGoodProjectsComponent/>
        <ResearchComponent/>
    </div>
</template>