import CardIconParagraph from '@/components/Cards/CardIconParagraph.vue'

export default {
  title: 'Kit/Cards/CardIconParagraph',
  component: CardIconParagraph
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardIconParagraph },
  template: '<CardIconParagraph v-bind="$props"/>'
})
export const Default = Template.bind({})
