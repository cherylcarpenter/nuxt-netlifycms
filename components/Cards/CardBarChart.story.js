import CardBarChart from '@/components/Cards/CardBarChart.vue'
export default {
  title: 'Kit/Cards/CardBarChart',
  component: CardBarChart
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardBarChart },
  template: '<CardBarChart />'
})
export const Default = Template.bind({})
