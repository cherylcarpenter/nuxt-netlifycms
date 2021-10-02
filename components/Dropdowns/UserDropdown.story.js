import UserDropdown from '@/components/Dropdowns/UserDropdown.vue'

export default {
  title: 'Kit/Dropdowns/UserDropdown',
  component: UserDropdown
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserDropdown },
  template: '<UserDropdown />'
})
export const Default = Template.bind({})
