<template>
  <section>
    <!-- #TODO this has a negative margin in final layout -->
    <div class="container mx-auto">
      <div
        class="
          flex flex-wrap
          justify-center
          bg-white
          shadow-xl
          rounded-lg
          py-16
          px-12
          relative
          z-10
        "
      >
        <div class="w-full text-center lg:w-8/12">
          <p class="text-4xl text-center">
            <span role="img" aria-label="love">😍</span>
          </p>
          <h3 class="font-semibold text-3xl">Do you love this Starter Kit?</h3>
          <p class=" text-lg leading-relaxed mt-4 mb-4">
            Cause if you do, it can be yours now. Hit the buttons below to
            navigate to get the Free version for your next project. Build a new
            web app or give an old project a new look!
          </p>
          <div class="sm:block flex flex-col mt-10">
            <a href="#" target="_blank" class="btn btn-emerald mr-1 mb-2">
              Get started
            </a>
            <a
              href="#"
              target="_blank"
              class="
                github-star
                sm:ml-1
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
            >
              <i class="fab fa-github text-lg mr-1"></i>
              <span>Help With a Star</span>
            </a>
          </div>
          <div class="text-center mt-16"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
