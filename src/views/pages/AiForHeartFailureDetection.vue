<script lang="ts">
import PageHeading from "@/components/pages/PageHeading.vue";

export default {
    components: {PageHeading}
}
</script>


<template>
    <PageHeading title="Ai For Heart-failure detection"/>
    <div class="container">
        <router-link to="/">Home</router-link>
        <div class="columns is-centered">
            <div class="column is-half-desktop is-two-thirds-mobile is-half-desktop content">
                <section class="section">
                    <h1 class="title is-4">
                        Introduction
                    </h1>

                    <p>
                        In this challenge, we set out to estimate the NT-proBNP values based on ECG signals for earlier
                        diagnosis of heart failure, because of the inaccessibility of NT-proBNP blood samples in some
                        countries and its relatively higher cost.
                        Therefore, the objective was to create a model that would be able to recognize patients with
                        elevated risks of heart-failure.

                    </p>


                </section>

                <section class="section">
                    <h1 class="title is-4">Context</h1>

                    <p>

                    </p>
                </section>

                <section class="section">
                    <h1 class="title is-4">Data</h1>

                    <p>
                        For the data we had 10 second measurements of 250hz samples of each of the 12 ECG leads. The
                        data also included the BNP values corresponding to each ECG
                        measurement, the datetime of the ECGs and NT-proBNP measurements, a hashed id per patient and
                        their age. For each measurement there was a timestamp, and therefore it was possible to
                        calculate the time
                        between the heart rate measurements and the NT-proBNP measurements and exclude those rows with a
                        too large time difference.

                        During the challenge we tackled the problem in two ways. First we treat the problem as a
                        regression problem and try to predict the NT-proBNP values directly. Secondly we treat the
                        problem as a classification problem and try to predict whether the NT-proBNP values are above or
                        below a certain threshold. The thresholds were provided by the physicians.
                        After a while we found out that regression worked as well as classification when converting the
                        predicted values to the corresponding classes, and therefore we stuck to regression as it was
                        more informative.
                    </p>

                    <h2 class="title is-5">Approach</h2>
                    <p>
                        We explored both traditional machine learning and deep learning approaches. Quickly we found out
                        that deep learning methods out-performed classical methods and therefore we focused on deep
                        learning.

                        During our review of the literature we found that the main methods used are either LSTMS, CNNs
                        or a combination of both. Due to time constraints we focused on CNN, because they tend to be
                        easier to train and they tend to be faster.

                        We make use of a resnet-like architecture.


                    </p>

                    <figure class="image">

                        <img src='/projects/AiForHeartFailureDetection/architecture.png' alt="Resnet architecture"/>
                        <figcaption class="is-size-7 has-text-centered"> Correlation between light exposure and brain
                            volume.
                        </figcaption>

                    </figure>


                </section>


            </div>

        </div>
    </div>


</template>

<style>

</style>