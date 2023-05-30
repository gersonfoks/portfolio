<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
</script>

<template>
    <nav-bar-component/>
  <div class="section">
    <HeaderComponent/>
  </div>
  <RouterView />
</template>
