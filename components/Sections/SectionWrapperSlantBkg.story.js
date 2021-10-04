import SectionWrapperSlantBkg from '@/components/Sections/SectionWrapperSlantBkg.vue'

export default {
  title: 'Kit/Sections/SectionWrapperSlantBkg',
  component: SectionWrapperSlantBkg
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SectionWrapperSlantBkg },
  template: '<SectionWrapperSlantBkg />'
})
export const Default = Template.bind({})
// Default.parameters = {
//   backgrounds: { default: 'grey' }
// }
