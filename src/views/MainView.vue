<script lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import projects from "@/data/AiForGoodProjects";
import type {Project} from "@/data/Project";


export default {
    components: {ProjectCard, HeaderComponent},


    data() {
        return {
            projects: projects as Project[]
        };
    },
}
</script>

<template>
    <div class="container">
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

        <section class="is-center content">
            <div class="hero-body">
                <p class="title has-text-centered">
                    Research
                </p>
            </div>
            <p class="subtitle has-text-centered">
                Master of Logic Projects
            </p>



            <p>Below is a list of some of the projects I did together with other students. Roughly there are two main
                fields Computational Social choice and Artificial intelligence</p>



            <p class="title is-6 has-text-centered">
                Artificial Intelligence
            </p>
            <ul>
                <li>
                    <a href="research/FACT_Reproducibility_Challenge.pdf">Fact reproducibility challenge</a>:
                    Reproduction and extension of the paper <cite><a
                        href="https://arxiv.org/abs/2006.13913">Generative causal explanations of black-box classifiers
                </a></cite>(awarded with a 10/10)
                </li>
                <li>
                    <a href="research/NLP2_language_emergence_paper.pdf">Exploring Predictability Pressure in
                        Referential Games for Language
                        Emergence</a>: In this project we explored what would happen if we put constraints on the
                    predictability of an emergent language.
                </li>
                <li>
                    <a href="research/Ordinary_vs_Weighted_Importance_Sampling.pdf">Ordinary vs. Weighted Importance
                        Sampling
                    </a>: Conducting research into the differences between ordinary and weighted importance sampling in
                    the context of reinforcement learning.
                </li>
                <li>
                    <a href="research/Rational_Extraction_for_dialogue_modelling.pdf">Why do you say that?
                        Rationale extraction for dialogue modelling
                    </a>: Investigating different rational extraction techniques for dialogue modelling.
                </li>
            </ul>

            <p class="title is-6 has-text-centered">
                Computation Social Choice
            </p>
            <ul>

                <li>
                    <a href="/research/MB_Participatory_budgeting.pdf">A Preliminary Study of Multi-Resource
                        Participatory Budgeting</a>: Investigating the fairness and compuational properties of
                    multi-resource participatory budgeting.
                </li>
                <li>
                    <a href="/research/Courcelle_s_theorem.pdf">Courcelle's Theorem</a>: Applying a Courcelle's theorem
                    to computational social choice problems and argue about the limitations.
                </li>
            </ul>


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