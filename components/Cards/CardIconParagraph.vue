<template>
    <div :class='["cardIconParagraph flex w-full", computedBoxClasses, "px-4 text-center"]'>
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
      >
          <icon-circle :icon="icon" />
          <h6 class="text-xl font-semibold">{{box.header}}</h6>
          <p class="mt-2 mb-4 text-blueGray-500">{{box.body}}
          </p>
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
      default(){
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
        bgColor: this.box.iconcircle.BgColor,
        Color: this.box.iconcircle.Color,
        Shadow: this.box.iconcircle.Shadow,
        iconClass: this.box.iconcircle.Class,
        SizeClasses: this.box.iconcircle.SizeClasses
      }
    }
  },

  computed: {
          computedBoxClasses() {
            const boxCount= this.boxCount
            if(boxCount===2) return 'md:w-6/12'
            if(boxCount===3) return 'md:w-4/12'
            if(boxCount===4) return 'md:w-3/12'
            return ''
          }
    }
}
</script>
<style lang="scss" scoped>

// @media screens and (max-width: ${screens.lg}) {
//   .cardIconParagraph > div {
//   padding-bottom: 2rem;
  
//   }
//  .cardIconParagraph:last-of-type > div{
//       padding-bottom: 0;
//     }
// }
 </style>