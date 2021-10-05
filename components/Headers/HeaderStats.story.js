import HeaderStats from '@/components/Headers/HeaderStats.vue'

export default {
  title: 'Kit/Headers/HeaderStats',
  component: HeaderStats
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderStats },
  template: '<HeaderStats />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'dark' }
// }
