<template>
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
  </div>
</template>

<script>
import IconCircle from '../Icons/IconCircle.vue'
export default {
  name: 'CardIconParagraph',
  components: { IconCircle }
}
</script>

<style></style>
