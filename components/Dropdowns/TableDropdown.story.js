import TableDropdown from '@/components/Dropdowns/TableDropdown.vue'

export default {
  title: 'Kit/Dropdowns/TableDropdown',
  component: TableDropdown
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TableDropdown },
  template: '<TableDropdown />'
})
export const Default = Template.bind({})
