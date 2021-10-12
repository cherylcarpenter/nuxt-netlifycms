<template>
  <div
    :class="[
      'p-3 text-center inline-flex items-center justify-center rounded-full mb-5',
      computedSizeClasses,
      icon.bgColor,
      icon.Color,
      computedShadowSize
    ]"
  >
    <i :class="[icon.iconClass, computedIconTextSize]"></i>
  </div>
</template>

<script>
export default {
  name: 'IconCircle',

  props: {
    icon: {
      type: Object,
      default:()=> ({
        bgColor: 'bg-red-400',
        Color: 'text-white',
        iconClass: 'fas fa-award',
        Shadow: 'large',
        SizeClasses: 'medium'
      })
    }
  },
  data() {
    return {

    }
  },
  computed: {
    computedSizeClasses() {
      const sizeClass = this.icon.SizeClasses
      if (sizeClass === 'small') return 'w-10 h-10'
      if (sizeClass === 'medium') return 'w-12 h-12'
      if (sizeClass === 'large') return 'w-16 h-16'
      return ''
    },
    computedIconTextSize() {
      const sizeClass = this.icon.SizeClasses
      if (sizeClass === 'small') return ''
      if (sizeClass === 'medium') return ''
      if (sizeClass === 'large') return 'text-xl'
      return ''
    },
    computedShadowSize() {
      const iconShadow = this.icon.Shadow

      if (iconShadow === 'xsmall') return 'shadow-sm'
      if (iconShadow === 'small') return 'shadow'
      if (iconShadow === 'medium') return 'shadow-md'
      if (iconShadow === 'large') return 'shadow-lg'
      if (iconShadow === 'xlarge') return 'shadow-xl'
      return ''
    }
  }
}
</script>
