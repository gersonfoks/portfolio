<template>
    <nav class="navbar is-transparent">
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
    </nav>
</template>

<script lang="ts">
export default {
    name: 'NavBarComponent',
};
</script>


