import Sidebar from '@/components/Sidebar/Sidebar.vue'

export default {
  title: 'Kit/Sidebar/Sidebar',
  component: Sidebar
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Sidebar },
  template: '<Sidebar />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'dark' }
// }
