import FooterSmall from '@/components/Footers/FooterSmall.vue'

export default {
  title: 'Kit/Footers/FooterSmall',
  component: FooterSmall
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterSmall },
  template: '<FooterSmall />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'dark' }
}
