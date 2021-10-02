import CardSettings from '@/components/Cards/CardSettings.vue'

export default {
  title: 'Kit/Cards/CardSettings',
  component: CardSettings
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardSettings },
  template: '<CardSettings />'
})
export const Default = Template.bind({})
