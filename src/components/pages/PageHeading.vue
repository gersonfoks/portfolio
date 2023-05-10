
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
    name: 'PageHeading',
    props: {
        title: {
            type: String,
            required: true
        }
    }
};
</script>

