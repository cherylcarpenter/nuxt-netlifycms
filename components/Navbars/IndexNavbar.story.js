import IndexNavbar from '@/components/Navbars/IndexNavbar.vue'

export default {
  title: 'Kit/Navbars/IndexNavbar',
  component: IndexNavbar
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexNavbar },
  template: '<IndexNavbar />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'dark' }
// }
