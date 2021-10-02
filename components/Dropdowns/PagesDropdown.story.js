import PagesDropdown from '@/components/Dropdowns/PagesDropdown.vue'

export default {
  title: 'Kit/Dropdowns/PagesDropdown',
  component: PagesDropdown
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PagesDropdown },
  template: '<PagesDropdown />'
})
export const Default = Template.bind({})
