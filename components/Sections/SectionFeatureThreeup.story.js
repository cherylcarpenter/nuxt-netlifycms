import SectionFeatureThreeup from '@/components/Sections/SectionFeatureThreeup.vue'

export default {
  title: 'Kit/Sections/SectionFeatureThreeup',
  component: SectionFeatureThreeup
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SectionFeatureThreeup },
  template: '<SectionFeatureThreeup />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'baby-blue' }
// }
