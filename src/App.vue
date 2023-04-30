<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <div class="section">
    <HeaderComponent/>
  </div>
  <RouterView />
</template>
