import FooterAdmin from '@/components/Footers/FooterAdmin.vue'

export default {
  title: 'Kit/Footers/FooterAdmin',
  component: FooterAdmin
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterAdmin },
  template: '<FooterAdmin />'
})
export const Default = Template.bind({})
