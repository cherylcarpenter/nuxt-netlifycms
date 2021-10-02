import CardLineChart from '@/components/Cards/CardLineChart.vue'

export default {
  title: 'Kit/Cards/CardLineChart',
  component: CardLineChart
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardLineChart },
  template: '<CardLineChart />'
})
export const Default = Template.bind({})
