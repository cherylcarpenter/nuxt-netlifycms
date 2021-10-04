import BannerIconCallouts from '@/components/Sections/BannerIconCallouts.vue'

export default {
  title: 'Kit/Sections/BannerIconCallouts',
  component: BannerIconCallouts
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BannerIconCallouts },
  template: '<BannerIconCallouts />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'baby-blue' }
}
