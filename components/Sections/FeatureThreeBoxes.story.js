import FeatureThreeBoxes from '@/components/Sections/FeatureThreeBoxes.vue'

export default {
  title: 'Kit/Sections/FeatureThreeBoxes',
  component: FeatureThreeBoxes
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FeatureThreeBoxes },
  template: '<FeatureThreeBoxes />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'baby-blue' }
}
