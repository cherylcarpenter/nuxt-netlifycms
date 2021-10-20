<template>
  <div
    class=" cardIconParagraph lg:flex-1 flex flex-none w-full max-w-xl px-3 mx-auto">
    <div
      class=" relative flex flex-col items-center w-full min-w-0 px-4 py-5 break-words bg-white rounded-lg shadow-lg">
      <icon-circle :icon="icon" />
      <h6 class="text-3xl">{{ box.header }}</h6>
      <p class="">{{ box.body }}</p>
    </div>
  </div>
</template>

<script>
import IconCircle from '../Icons/IconCircle.vue'
import './cardIconParagraph.scss'

export default {
  name: 'CardIconParagraph',
  components: { IconCircle },

  props: {
    box: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      icon: {
        bgColor: this.box.iconcircle.BgColor,
        Color: this.box.iconcircle.Color,
        Shadow: this.box.iconcircle.Shadow,
        iconClass: this.box.iconcircle.Class,
        SizeClasses: this.box.iconcircle.SizeClasses
      }
    }
  }
}
</script>
