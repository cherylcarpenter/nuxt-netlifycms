import CardProfile from '@/components/Cards/CardProfile.vue'

export default {
  title: 'Kit/Cards/CardProfile',
  component: CardProfile
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardProfile },
  template: '<CardProfile />'
})
export const Default = Template.bind({})
