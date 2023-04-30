import{_ as e,o as t,c as o,a as s}from"./index-eba68285.js";const i={},a="/portfolio/projects/AiForElephants/sed_example.png",n={class:"container"},r=s('<section class="hero is-center"><div class="hero-body"><p class="title has-text-centered"> AI for Elephants </p></div></section><div class="columns is-centered"><div class="column is-two-thirds"><section class="section"><p class="title is-4"> Introduction </p><p> In this project, our aim was to explore the effectiveness of transformer models for sound event detection (SED). Specifically, we focused on detecting two distinct sounds - gunshots and elephant rumbles - in acoustic recordings, with the goal of developing an efficient tool for monitoring elephant populations and detecting illegal activities such as poaching. </p><p> Our work build upon previous work (insert ref). In this work mainly recurrent neural networks (RNNs) were used to detect elephant rumbles. To improve upon this, we used transformers, which are more efficient and have been shown to outperform RNNs in many tasks. During these 10 weeks we showed that an Audio Spectogram Transfomer like model has potential for further development as it achieved good performance while also having a low computational cost. </p></section><section class="section"><p class="title is-4">The challenge and data</p><p> During this challenge 4 teams focussed on detecting forest elephant rumbles on sound recordings and optimizing models such that they can work on-edge. Four teams were formed, each focusing on a specific aspect of the project. The first team worked on on-edge optimization, while the second team was responsible for building an app for researchers. The third team focused on optimizing the spectrogram conversion for the older model, and the fourth team, which I was a part of, focused on exploring new models. The data was provided by Cornell university and consisted of multiple days of recording of elephant rumbles. In total we got acces to x total clips, with some clips overlapping eachother. Furthermore, there where clips of gunshots. All the data was annotated and thus perfect for SED. </p><figure class="image section"><div class="title is-6 has-text-centered"><p>Example Data</p></div><img src="'+a+'"><figcaption class="is-size-7 has-text-centered">Example of a spectrogram, raw audio and an event matrix of an elephant rumble. Rumbles can be identified by their low frequencies. </figcaption><div></div></figure></section><section class="section"><p class="title is-4">Approach and Model</p><p> We decided to work with 20-second clips and take a random 10-second window from each clip during training. This way we could increase the amount of data we had available for training. Furthermore, it ensured that we also had negative examples, in which no or only background noise was present. For consistency we down-sampled clips that were either 8 kHz or 4 kHz to 4 kHz. Next, we utilized an advanced deep learning architecture to create our sound event detection model. First, we converted the raw audio data to a mel-spectrogram with 256 mel bins. Then, we used a model that was similar to the Audio Spectrogram Transformer. We treated the mel-spectrogram as an image with a single channel and used 2D convolutions to extract tokens for each 1-second segment of the audio clip. We then fed these tokens into a transformer for self-attention. Finally, we used 1D convolutions to extract an output matrix, which we used to make predictions on the audio clip. See the figure below for a schematic overview of the architecture </p></section><section class="section"><p class="title is-4">Results</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam assumenda consequatur, et, labore minima molestias neque nobis non numquam porro quo tenetur. A accusamus dolorem ipsum iure modi molestiae, officia perferendis quibusdam reprehenderit rerum saepe vero voluptas. Delectus esse maiores molestiae? A alias dolorem error expedita id impedit in itaque laboriosam minima modi natus nemo nobis nulla, numquam, porro quas quisquam recusandae reiciendis rem repellat! Beatae consequatur consequuntur cum deleniti doloremque ducimus eum, fugiat fugit iste itaque iusto maiores minima minus nam nulla reiciendis sint soluta voluptatum! Ab assumenda doloribus esse eum ipsam necessitatibus perferendis quo quod rem voluptas!</p></section><section class="section"><p class="title is-4">Future work</p><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam assumenda consequatur, et, labore minima molestias neque nobis non numquam porro quo tenetur. A accusamus dolorem ipsum iure modi molestiae, officia perferendis quibusdam reprehenderit rerum saepe vero voluptas. Delectus esse maiores molestiae? A alias dolorem error expedita id impedit in itaque laboriosam minima modi natus nemo nobis nulla, numquam, porro quas quisquam recusandae reiciendis rem repellat! Beatae consequatur consequuntur cum deleniti doloremque ducimus eum, fugiat fugit iste itaque iusto maiores minima minus nam nulla reiciendis sint soluta voluptatum! Ab assumenda doloribus esse eum ipsam necessitatibus perferendis quo quod rem voluptas! </p></section></div></div>',2),c=[r];function u(l,d,m,p,h,f){return t(),o("div",n,c)}const g=e(i,[["render",u]]);export{g as default};
