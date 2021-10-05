import HeaderBanner from '@/components/Sections/HeaderBanner.vue'

export default {
  title: 'Kit/Sections/HeaderBanner',
  component: HeaderBanner
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderBanner },
  template: '<HeaderBanner />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'grey' }
// }
