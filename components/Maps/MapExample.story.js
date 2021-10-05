import MapExample from '@/components/Maps/MapExample.vue'

export default {
  title: 'Kit/Maps/MapExample',
  component: MapExample
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MapExample },
  template: '<MapExample />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'dark' }
// }
