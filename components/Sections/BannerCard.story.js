import BannerCard from '@/components/Sections/BannerCard.vue'

export default {
  title: 'Kit/Sections/BannerCard',
  component: BannerCard
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BannerCard },
  template: '<BannerCard />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'baby-blue' }
}
