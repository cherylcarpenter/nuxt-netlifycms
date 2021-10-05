import AdminNavbar from '@/components/Navbars/AdminNavbar.vue'

export default {
  title: 'Kit/Navbars/AdminNavbar',
  component: AdminNavbar
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AdminNavbar },
  template: '<AdminNavbar />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'dark' }
// }
