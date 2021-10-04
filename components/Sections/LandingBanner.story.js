import LandingBanner from '@/components/Sections/LandingBanner.vue'

export default {
  title: 'Kit/Sections/LandingBanner',
  component: LandingBanner
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LandingBanner },
  template: '<LandingBanner />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'baby-blue' }
// }
