import IndexDropdown from '@/components/Dropdowns/IndexDropdown.vue'

export default {
  title: 'Kit/Dropdowns/IndexDropdown',
  component: IndexDropdown
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexDropdown },
  template: '<IndexDropdown />'
})
export const Default = Template.bind({})
