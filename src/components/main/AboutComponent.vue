<template>
    <div>
        <div class="container">
            <section class="hero">
                <div class="columns m-3">
                    <div class="column is-half">
                        <div class="hero-body ">
                            <div>
                                <h1 class="title has-text-centered">
                                    About
                                </h1>
                                <p>
                                    I am a software engineer with a passion for machine learning and artificial
                                    intelligence.
                                    I've worked on a variety of projects, ranging from web development to machine
                                    learning. I am
                                    always
                                    looking for new challenges and opportunities to learn.
                                </p>

                                <div class="content">
                                    <p>
                                        <ul>
                                            <li>
                                                <a href="https://github.com/gersonfoks">Github</a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/gerson-foks-50b784b2/">LinkedIn</a>
                                            </li>
                                            <li>
                                                <a href="./C_V_.pdf">Curriculum Vitae</a>
                                            </li>


                                        </ul>

                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="column is-half">
                        <figure class="image is-two-thirds">

                            <img :src="'./abstract_city_wide.png'">

                        </figure>
                    </div>

                </div>

            </section>
        </div>


    </div>


</template>


<script lang="ts">
export default {
    name: 'AboutComponent',
};
</script>


