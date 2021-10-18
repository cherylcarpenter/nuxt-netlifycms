<template>
  <section
    class="header relative pt-16 items-center flex h-screen max-h-860-px"
  >
    <div class="container mx-auto items-center flex flex-wrap">
      <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
        <div class="pt-32 sm:pt-0">
          <h2 class="font-semibold text-4xl text-blueGray-600">
            Vue Notus - A beautiful extension for Tailwind CSS.
          </h2>
          <p class="mt-4 text-lg leading-relaxed ">
            Vue Notus is Free and Open Source. It does not change any of the CSS
            from
            <a
              href="https://tailwindcss.com/?ref=creativetim"
              class="text-blueGray-600"
              target="_blank"
            >
              Tailwind CSS.
            </a>
            It features multiple HTML elements and it comes with dynamic
            components for ReactJS, Vue and Angular.
          </p>
          <div class="mt-12">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index"
              target="_blank"
              class="
                get-started
                text-white
                font-bold
                px-6
                py-4
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                bg-emerald-500
                active:bg-emerald-600
                uppercase
                text-sm
                shadow
                hover:shadow-lg
                ease-linear
                transition-all
                duration-150
              "
            >
              Get started
            </a>
            <a
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
              class="
                github-star
                ml-1
                text-white
                font-bold
                px-6
                py-4
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                bg-blueGray-700
                active:bg-blueGray-600
                uppercase
                text-sm
                shadow
                hover:shadow-lg
                ease-linear
                transition-all
                duration-150
              "
              target="_blank"
            >
              Github Star
            </a>
          </div>
        </div>
      </div>
    </div>

    <img
      class="
        absolute
        top-0
        b-auto
        right-0
        pt-16
        sm:w-6/12
        -mt-48
        sm:mt-0
        w-10/12
        max-h-860-px
      "
      :src="patternVue"
      alt="..."
    />
  </section>
</template>

<script>
import patternVue from '@/assets/img/pattern_vue.png'

export default {
  data() {
    return {
      patternVue
    }
  }
}
</script>
