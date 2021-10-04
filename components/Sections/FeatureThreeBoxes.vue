<template>
  <section>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-8
              shadow-lg
              rounded-lg
            "
          >
            <div class="px-4 py-5 flex-auto">
              <icon-circle icon-class="fas fa-award" />
              <h6 class="text-xl font-semibold">Awarded Agency</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-4/12 px-4 text-center">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-8
              shadow-lg
              rounded-lg
            "
          >
            <div class="px-4 py-5 flex-auto">
              <icon-circle
                bg-color="bg-lightBlue-400"
                icon-class="fas fa-retweet"
              />

              <h6 class="text-xl font-semibold">Free Revisions</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious.
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-8
              shadow-lg
              rounded-lg
            "
          >
            <div class="px-4 py-5 flex-auto">
              <icon-circle
                bg-color="bg-emerald-400"
                icon-class="fas fa-fingerprint"
              />
              <h6 class="text-xl font-semibold">Verified Company</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Write a few lines about each one. A paragraph describing a
                feature will be enough. Keep you user engaged!
              </p>
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
