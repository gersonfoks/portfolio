<template>
    <div v-if="!reversed" class="card p-3">
        <div class="columns is-centered ">
            <div class="column is-two-thirds">
                <div class="card-content">
                    <div class="content m-auto p-auto has-text-centered">
                        <h1 class="title is-5 has-text-centered">{{ project.title }}</h1>
                        {{ project.description }}
                    </div>
                    <div class="has-text-centered">
                        <a :href="project.github_link"><img class="image is-16x16 is-inline" src="/github-mark.png"
                                                            alt="Github Link"> Github Link</a>
                    </div>
                </div>
            </div>
            <div class="column is-one-third is-flex">
                <div class="card-image m-auto">
                    <figure class="image">
                        <img :src="project.img_src" alt="Placeholder image">
                    </figure>
                </div>
            </div>
        </div>


    </div>

    <div v-else class="card p-3">
        <div class="columns is-centered ">
            <div class="column is-one-third is-flex">
                <div class="card-image m-auto">
                    <figure class="image">
                        <img :src="project.img_src" alt="Placeholder image">
                    </figure>
                </div>
            </div>
            <div class="column is-two-thirds">
                <div class="card-content">
                    <div class="content m-auto p-auto has-text-centered">
                        <h1 class="title is-5 has-text-centered">{{ project.title }}</h1>
                        {{ project.description }}
                    </div>
                    <div class="has-text-centered">
                        <a :href="project.github_link"><img class="image is-16x16 is-inline" src="/github-mark.png"
                                                            alt="Github Link"> Github Link</a>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script lang="ts">


import {SideProject} from "@/data/SideProject";

export default {
    props: {
        project: {
            type: SideProject,
            required: true
        },
        reversed: {
            type: Boolean,
            required: true
        }
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


