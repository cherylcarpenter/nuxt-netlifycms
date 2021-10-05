import ProductFeatureCallouts from '@/components/Sections/ProductFeatureCallouts.vue'

export default {
  title: 'Kit/Sections/ProductFeatureCallouts',
  component: ProductFeatureCallouts
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProductFeatureCallouts },
  template: '<ProductFeatureCallouts />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'baby-blue' }
}
