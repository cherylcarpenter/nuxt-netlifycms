import FeatureThreeBoxes from '@/components/Sections/FeatureThreeBoxes.vue'

export default {
  title: 'Kit/Sections/FeatureThreeBoxes',
  component: FeatureThreeBoxes
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FeatureThreeBoxes },
  template: '<FeatureThreeBoxes v-bind="$props" v-on="$props" />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'baby-blue' }
}
Default.args = {
  content: {
    boxes: {
      iconcircle: {
        BgColor: 'bg-rose-50',
        Color: 'text-rose-300',
        Shadow: 'medium',
        SizeClasses: 'medium',
        Class: 'fas fa-address-card'
      },

      header: 'Box Onezz',
      body: 'Box one Box one Box one Box one Box one Box one Box one Box one Box one '
    }
  }
}
