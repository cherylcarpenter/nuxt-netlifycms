import CardIconParagraph from '@/components/Cards/CardIconParagraph.vue'
import BgColors from '@/static/data/tokensBg.json'
import TextColors from '@/static/data/tokensText.json'
import FontAwesomeIcons from '@/static/data/fontAwesomeClasses.json'
const BgColorsKeys = Object.keys(BgColors)
const textColorsKeys = Object.keys(TextColors)
export default {
  title: 'Kit/Cards/CardIconParagraph',
  component: CardIconParagraph,
  argTypes:{ 
    iconBgColor: {
      options: BgColorsKeys,
      control: { 
        type: 'select',
      },
    },
    iconColor: {
      control: { type: 'select' },
      options: textColorsKeys
    },
    iconClass: {
      control: { type: 'select' },
      options: FontAwesomeIcons
    },
    iconSizeClasses: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    iconShadow: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge']
    },
  } 
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardIconParagraph },
  template: '<CardIconParagraph v-bind="$props"/>'
})
export const Default = Template.bind({})
Default.args = {
  iconBgColor: 'bg-red-400',
  iconColor: 'text-white',
  iconClass: 'fas fa-award',
  iconShadow: 'large',
  iconSizeClasses: 'medium',
}