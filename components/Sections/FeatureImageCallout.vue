<template>
  <section>
    <div class="container mx-auto px-4 pb-32 pt-48">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
          <div class="md:pr-12">
            <icon-circle
              size-classes="large"
              icon-class="fas fa-file-alt text-xl"
              bg-color="bg-white"
              color=" "
            />
            <h3 class="text-3xl font-semibold">Complex Documentation</h3>
            <p class="mt-4 text-lg leading-relaxed ">
              This extension comes a lot of fully coded examples that help you
              get started faster. You can adjust the colors and also the
              programming language. You can change the text and images and
              you're good to go.
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="
                        text-xs
                        font-semibold
                        inline-block
                        py-1
                        px-2
                        uppercase
                        rounded-full
                        
                        bg-blueGray-50
                        mr-3
                      "
                    >
                      <i class="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="">
                      Built by Developers for Developers
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="
                        text-xs
                        font-semibold
                        inline-block
                        py-1
                        px-2
                        uppercase
                        rounded-full
                        
                        bg-blueGray-50
                        mr-3
                      "
                    >
                      <i class="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="">
                      Carefully crafted code for Components
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="
                        text-xs
                        font-semibold
                        inline-block
                        py-1
                        px-2
                        uppercase
                        rounded-full
                        
                        bg-blueGray-50
                        mr-3
                      "
                    >
                      <i class="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="">
                      Dynamic Javascript Components
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-xl"
            style="
              transform: scale(1) perspective(1040px) rotateY(-11deg)
                rotateX(2deg) rotate(2deg);
            "
            :src="documentation"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconCircle from '../Icons/IconCircle.vue'
import documentation from '@/assets/img/documentation.png'

export default {
  components: { IconCircle },
  data() {
    return {
      documentation
    }
  }
}
</script>
