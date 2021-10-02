import NotificationDropdown from '@/components/Dropdowns/NotificationDropdown.vue'

export default {
  title: 'Kit/Dropdowns/NotificationDropdown',
  component: NotificationDropdown
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NotificationDropdown },
  template: '<NotificationDropdown />'
})
export const Default = Template.bind({})
