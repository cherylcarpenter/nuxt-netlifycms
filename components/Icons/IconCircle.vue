<template>
  <div
    :key="id"
    :class="[
      'p-3 text-center inline-flex items-center justify-center rounded-full',
      computedSizeClasses,
      bgColor,
      color,
      marginBottom,
      shadow
    ]"
  >
    <i :class="[iconClass, computedIconTextSize]"></i>
  </div>
</template>

<script>
export default {
  name: 'IconCircle',

  props: {
    bgColor: {
      type: String,
      default: 'bg-red-400'
    },
    color: {
      type: String,
      default: 'text-white'
    },
    marginBottom: {
      type: String,
      default: 'mb-5'
    },
    shadow: {
      type: String,
      default: 'shadow-lg'
    },
    iconClass: {
      type: String,
      default: 'fas fa-award'
    },
    sizeClasses: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    iconTextSize: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: 'key'
    }
  },
  computed: {
    computedSizeClasses() {
      if (this.sizeClasses === 'small') return 'w-10 h-10'
      if (this.sizeClasses === 'medium') return 'w-12 h-12'
      if (this.sizeClasses === 'large') return 'w-16 h-16'
      return ''
    },
    computedIconTextSize() {
      if (this.sizeClasses === 'small') return ''
      if (this.sizeClasses === 'medium') return ''
      if (this.sizeClasses === 'large') return 'text-xl'
      return ''
    }
  }
}
</script>
