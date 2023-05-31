<template>
    <nav class="navbar is-transparent has-background-light">
        <div class="navbar-brand">

            <router-link to="/" class="navbar-item">
                <img src="/g_logo.png">
            </router-link>

        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    <router-link to="/">Home</router-link>
                </a>
            </div>

        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-secondary" @click="(event) => scrollTo('about')">
                        About
                    </a>
                    <a class="button is-secondary" @click="(event) => scrollTo('ai-for-good-projects')">
                       AI-for-good-projects
                    </a>
                    <a class="button is-secondary" @click="(event) => scrollTo('side-projects')">
                        Side-Projects
                    </a>
                    <a class="button is-secondary" @click="(event) => scrollTo('research')">
                        Research
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'NavBarComponent',

    methods: {

        scrollTo(elementId: string){
            const element = document.getElementById(elementId);
            element?.scrollIntoView({behavior: "smooth", });
        }

    }
};
</script>


