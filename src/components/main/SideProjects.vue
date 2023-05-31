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

                <div class="columns is-multiline">
                    <div class="column is-half">
                        <side-project-card></side-project-card>
                    </div>

                    <div class="column is-half">
                        <side-project-card></side-project-card>
                    </div>

                    <div class="column is-half">
                        <side-project-card></side-project-card>
                    </div>

                    <div class="column is-half">
                        <side-project-card></side-project-card>
                    </div>


                </div>


            </div>

        </section>


    </div>


</template>


<script lang="ts">
import SideProjectCard from "@/components/SideProjectCard.vue";

export default {
    name: 'SideProjectsComponent',
    components: {SideProjectCard},
};
</script>


