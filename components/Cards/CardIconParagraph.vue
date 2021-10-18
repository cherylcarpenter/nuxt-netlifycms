<template>
  <div
    :class="[
      'cardIconParagraph flex w-full',
      computedBoxClasses,
      'px-4'
    ]"
  >
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        shadow-lg
        rounded-lg
        px-4
        py-5
        items-center
      "
    >{{ box }}
      <icon-circle :icon="icon" />
      <h6 class="text-3xl">{{ box.header }}</h6>
      <p class="">{{ box.body }}</p>
    </div>
  </div>
</template>

<script>
import IconCircle from '../Icons/IconCircle.vue'
export default {
  name: 'CardIconParagraph',
  components: { IconCircle },

  props: {
    box: {
      type: Object,
      default() {
        return {}
      }
    },
    boxCount: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      icon: {
        // bgColor: this.box.iconcircle.BgColor,
        // Color: this.box.iconcircle.Color,
        // Shadow: this.box.iconcircle.Shadow,
        // iconClass: this.box.iconcircle.Class,
        // SizeClasses: this.box.iconcircle.SizeClasses
      }
    }
  },

  computed: {
    computedBoxClasses() {
      const boxCount = this.boxCount
      if (boxCount === 2) return 'md:w-6/12'
      if (boxCount === 3) return 'md:w-4/12'
      if (boxCount === 4) return 'md:w-3/12'
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
.cardIconParagraph > div {
  @apply mb-6 md:mb-0;
}
.cardIconParagraph:last-of-type > div {
  @apply mb-0;
}

</style>