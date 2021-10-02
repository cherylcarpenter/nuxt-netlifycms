import CardPageVisits from '@/components/Cards/CardPageVisits.vue'

export default {
  title: 'Kit/Cards/CardPageVisits',
  component: CardPageVisits
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardPageVisits },
  template: '<CardPageVisits />'
})
export const Default = Template.bind({})
