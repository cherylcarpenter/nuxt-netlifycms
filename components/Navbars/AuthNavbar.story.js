import AuthNavbar from '@/components/Navbars/AuthNavbar.vue'

export default {
  title: 'Kit/Navbars/AuthNavbar',
  component: AuthNavbar
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AuthNavbar },
  template: '<AuthNavbar />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'dark' }
}
