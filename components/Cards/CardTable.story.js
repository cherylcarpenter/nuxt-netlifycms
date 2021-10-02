import CardTable from '@/components/Cards/CardTable.vue'

export default {
  title: 'Kit/Cards/CardTable',
  component: CardTable
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardTable },
  template: '<CardTable />'
})
export const Default = Template.bind({})
