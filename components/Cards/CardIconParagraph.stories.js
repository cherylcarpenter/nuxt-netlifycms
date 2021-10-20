import CardIconParagraph from '@/components/Cards/CardIconParagraph.vue'
import BgColors from '@/static/data/tokensBg.json'
import TextColors from '@/static/data/tokensText.json'
import FontAwesomeIcons from '@/static/data/fontAwesomeClasses.json'
const BgColorsKeys = Object.keys(BgColors)
const textColorsKeys = Object.keys(TextColors)

export default {
  title: 'Kit/Cards/CardIconParagraph',
  component: CardIconParagraph,
  argTypes: {
    iconBgColor: {
      options: BgColorsKeys,
      control: {
        type: 'select'
      },
      defaultValue: 'bg-red-400'
    },
    iconColor: {
      control: { type: 'select' },
      options: textColorsKeys,
      defaultValue: 'text-white'
    },
    iconClass: {
      control: { type: 'select' },
      options: FontAwesomeIcons,
      defaultValue: 'fas fa-award'
    },
    iconSizeClasses: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium'
    },
    iconShadow: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      defaultValue: 'large'
    }
  }
}

const Template = (_args, { argTypes }) => ({
  data() {
    return {
      newBox: {
        iconcircle: {
          BgColor: this.iconBgColor,
          Color: this.iconColor,
          Shadow: this.iconShadow,
          SizeClasses: this.iconSizeClasses,
          Class: this.iconClass
        },
        header: 'Box One',
        body: 'Box one Box one Box one Box one Box one Box one Box one Box one Box one'
      }
    }
  },
  props: Object.keys(argTypes),
  components: { CardIconParagraph },
  template: '<CardIconParagraph v-bind="$props" :box="this.newBox"/>'
})
export const Default = Template.bind({})
