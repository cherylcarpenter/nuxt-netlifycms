import ProductFeatureCollage from '@/components/Sections/ProductFeatureCollage.vue'

export default {
  title: 'Kit/Sections/ProductFeatureCollage',
  component: ProductFeatureCollage
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProductFeatureCollage },
  template: '<ProductFeatureCollage />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'baby-blue' }
}
