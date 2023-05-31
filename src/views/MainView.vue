<script lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import projects from "@/data/AiForGoodProjects";
import type {Project} from "@/data/Project";
import ResearchComponent from "@/components/main/ResearchComponent.vue";
import AiForGoodProjectsComponent from "@/components/main/AiForGoodProjectsComponent.vue";
import AboutComponent from "@/components/main/AboutComponent.vue";
import SideProjectsComponent from "@/components/main/SideProjects.vue";


export default {
    components: {SideProjectsComponent, AboutComponent, AiForGoodProjectsComponent, ResearchComponent},


    data() {
        return {
            projects: projects as Project[]
        };
    },
}
</script>

<template>

    <div id="about">
        <AboutComponent class="has-background-light"/>
    </div>
    <div id="ai-for-good-projects">
    <AiForGoodProjectsComponent />
    </div>
    <div id="side-projects">
        <SideProjectsComponent class="has-background-light"/>
    </div>


    <div id="research">
        <ResearchComponent />
    </div>


</template>