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
          <icon-circle :icon="icon" />
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
  components: { IconCircle },

  props: {
    iconBgColor: {
      type: String,
      default: 'bg-red-400'
    },
    iconColor: {
      type: String,
      default: 'text-white'
    },
    iconShadow: {
      type: String,
      default: 'large',
      validator(value) {
        return ['xsmall', 'small', 'medium', 'large', 'xlarge'].includes(value)
      }
    },
    iconClass: {
      type: String,
      default: 'fas fa-award'
    },
    iconSizeClasses: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    }
  },
  data() {
    return {
      icon: {
        BgColor: this.iconBgColor,
        Color: this.iconColor,
        Shadow: this.iconShadow,
        iconClass: this.iconClass,
        SizeClasses: this.iconSizeClasses
      }
    }
  }
}
</script>

<style></style>
