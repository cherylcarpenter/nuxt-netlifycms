<template>
  <!-- #TODO this one has negative margin for the section wrapper -->

  <section
    class="header relative pt-16 items-center flex h-screen max-h-860-px"
  >
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div
          class="
            w-10/12
            md:w-6/12
            lg:w-4/12
            px-12
            md:px-4
            mr-auto
            ml-auto
            -mt-32
          "
        >
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-6
              shadow-lg
              rounded-lg
              bg-emerald-500
            "
          >
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-emerald-500 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">
                Great for your awesome project
              </h4>
              <p class="text-md font-light mt-2 text-white">
                Putting together a page has never been easier than matching
                together pre-made components. From landing pages presentation to
                login areas, you can easily customise and built your pages.
              </p>
            </blockquote>
          </div>
        </div>

        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col mt-4">
                <div class="px-4 py-5 flex-auto">
                  <icon-circle
                    icon-class="fas fa-sitemap"
                    bg-color="bg-white"
                    color=""
                  />
                  <h6 class="text-xl mb-1 font-semibold">CSS Components</h6>
                  <p class="mb-4 ">
                    Vue Notus comes with a huge number of Fully Coded CSS
                    components.
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <icon-circle
                    icon-class="fas fa-drafting-compass"
                    bg-color="bg-white"
                    color=""
                  />
                  <h6 class="text-xl mb-1 font-semibold">
                    JavaScript Components
                  </h6>
                  <p class="mb-4 ">
                    We also feature many dynamic components for React, NextJS,
                    Vue and Angular.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 mt-4">
                <div class="px-4 py-5 flex-auto">
                  <icon-circle
                    icon-class="fas fa-newspaper"
                    bg-color="bg-white"
                    color=""
                  />
                  <h6 class="text-xl mb-1 font-semibold">Pages</h6>
                  <p class="mb-4 ">
                    This extension also comes with 3 sample pages. They are
                    fully coded so you can start working instantly.
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <icon-circle
                    icon-class="fas fa-file-alt"
                    bg-color="bg-white"
                    color=""
                  />
                  <h6 class="text-xl mb-1 font-semibold">Documentation</h6>
                  <p class="mb-4 ">
                    Built by developers for developers. You will love how easy
                    is to to work with Vue Notus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconCircle from '../Icons/IconCircle.vue'
export default {
  components: { IconCircle }
}
</script>
