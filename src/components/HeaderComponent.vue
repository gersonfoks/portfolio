
<template>
    <section class="hero ">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            My Portfolio
          </h1>
          <h2 class="subtitle">
            Welcome to my portfolio
          </h2>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
  data() {
    return {
      name: 'John Doe',
      JobTitle: 'Machine Learning Engineer',
      ProfilePic: './place_holder.jpg',
    };
  },
};
</script>


