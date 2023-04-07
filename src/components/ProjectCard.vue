<template>


  <div class="card equal-height">
    <div class="card-content">
      <p class="title is-4">{{ title }}</p>
      <div class="content">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style>

.equal-height{
  display: flex;
  flex-direction: column;
  height: 100%;

}

.card {
  margin-top: auto;
}

</style>


