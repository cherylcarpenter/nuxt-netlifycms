import Typography from '@/components/Atoms/Typography.vue'

export default {
  title: 'Atoms/Typography',
  component: Typography
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Typography },
  template: '<Typography />'
})
export const Default = Template.bind({})
