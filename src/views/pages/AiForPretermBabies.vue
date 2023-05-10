<script lang="ts">
import PageHeading from "@/components/pages/PageHeading.vue";

export default {
    components: {PageHeading}
}
</script>


<template>
    <PageHeading title="Ai For Preterm Babies"/>
    <div class="container">
        <router-link to="/">Home</router-link>
        <div class="columns is-centered">
            <div class="column is-half-desktop is-two-thirds-mobile is-half-desktop content">
                <section class="section">
                    <h1 class="title is-4">
                        Introduction
                    </h1>

                    <p>
                        During this challenge we set out to investigate the effect of light exposure on the development
                        of
                        preterm babies using data from the NICU of the UMC Utrecht.
                        Concretely, we investigated the following research question:
                        <i>What is the effect of light exposure on the development of preterm babies?</i>
                        We found no clear relationship between the light exposure and the development of preterm babies,
                        but
                        it was not clear if this was due to data quality issues (such as the size and lack of good
                        outcome
                        variable) or because there isn't a relationship between light exposure and the development of a
                        preterm baby.
                    </p>


                </section>

                <section class="section">
                    <h1 class="title is-4">Context</h1>

                    <p>
                        Every year, approximately 15 million babies are born prematurely worldwide. Premature birth is
                        associated with higher risks
                        for developing health complications shortly after birth, including respiratory distress,
                        hypoglycemia and jaundice. In addition, preterm birth may impact cognitive and motor
                        development,
                        potentially leading to developmental issues later in life, such as learning difficulties and
                        behavioural problems.
                        Preterm babies are often admitted to the Neonatal Intensive Care Unit (NICU) following birth,
                        where
                        they receive specialised care during the first period of their lives.
                        During their stay in the NICU, preterm babies are exposed to a variety of stimuli, including
                        light.
                        Little is known about the effect of light exposure on the development of preterm babies.
                        There is however reason to believe that light exposure might influence the development of
                        preterm
                        babies.
                        For example, it is know that light exposure is important for regulating different physiological
                        processes in the body, such as the sleep-wake cycle and the production of melatonin.
                        Furthermore, the process in which light influences these processes is well understood.
                    </p>
                </section>


                <section class="section">
                    <h1 class="title is-4">Data</h1>

                    <p>
                        The data we have access to consists of 136 patients that were in the NICU and HCU at UMC
                        Utrecht. The data consisted of heart rate, body temperature, light and sound exposure and
                        saturation measurements as well as the weight and skull circumference of the babies. Lastly, the
                        results from MRI scans at 40 weeks of a selected group of babies were available.

                        We looked at:
                        - Light exposure
                        - Phototherapy
                        - Skull size and weight
                        - MRI scans
                    </p>

                    <h2 class="title is-5">Quality issues</h2>
                  <p>
                        List quality issues
                    </p>

                    <h2 class="title is-5">Cleaning</h2>
                    <p>
                        List quality issues and how we solved them:
                        - Photo therapy
                        - Not same sampling frequency

                    </p>

                    <h2 class="title is-5">Feature extraction</h2>
                    <p>
                        Feature extraction:
                        - Mean light exposure
                        - Variance of light exposure
                        - Autocorrelation: 2, 4, 8



                        Another thing we could have used something like fourier transformation to extract any rythmicity.
                    </p>

                </section>


                <section class="section">
                    <h1 class="title is-4">Analysis</h1>

                    - correlation:
                        - Problems

                    - regression
                </section>


                <section class="section">
                    <h1 class="title is-4">Conclusion and further work</h1>
                </section>


            </div>

        </div>
    </div>


</template>

<style>

.caption-bottom {
    caption-side: bottom;
}
</style>