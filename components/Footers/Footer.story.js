import Footer from '@/components/Footers/Footer.vue'

export default {
  title: 'Kit/Footers/Footer',
  component: Footer
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<Footer />'
})
export const Default = Template.bind({})
