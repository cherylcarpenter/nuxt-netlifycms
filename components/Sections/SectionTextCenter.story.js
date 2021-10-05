import SectionTextCenter from '@/components/Sections/SectionTextCenter.vue'

export default {
  title: 'Kit/Sections/SectionTextCenter',
  component: SectionTextCenter
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SectionTextCenter },
  template: '<SectionTextCenter />'
})
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'baby-blue' }
}
