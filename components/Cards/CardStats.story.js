import CardStats from '@/components/Cards/CardStats.vue'

export default {
  title: 'Kit/Cards/CardStats',
  component: CardStats
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardStats },
  template: '<CardStats />'
})
export const Default = Template.bind({})
