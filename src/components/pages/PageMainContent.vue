
<template>
    <section class="hero is-primary is-small">
        <div class="hero-body">
            <p class="title has-text-centered">
                {{title}}
            </p>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'PageMainContent',
    props: {
        title: {
            type: String,
            required: true
        }
    }
};
</script>

