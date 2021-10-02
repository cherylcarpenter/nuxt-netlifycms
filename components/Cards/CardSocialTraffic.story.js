import CardSocialTraffic from '@/components/Cards/CardSocialTraffic.vue'

export default {
  title: 'Kit/Cards/CardSocialTraffic',
  component: CardSocialTraffic
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardSocialTraffic },
  template: '<CardSocialTraffic />'
})
export const Default = Template.bind({})
