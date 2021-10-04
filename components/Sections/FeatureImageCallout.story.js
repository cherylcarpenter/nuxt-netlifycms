import FeatureImageCallout from '@/components/Sections/FeatureImageCallout.vue'

export default {
  title: 'Kit/Sections/FeatureImageCallout',
  component: FeatureImageCallout
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FeatureImageCallout },
  template: '<FeatureImageCallout />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'baby-blue' }
}
