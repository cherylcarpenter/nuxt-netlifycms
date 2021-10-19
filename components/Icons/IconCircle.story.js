import IconCircle from '@/components/Icons/IconCircle.vue'
import BgColors from '@/static/data/tokensBg.json'
import TextColors from '@/static/data/tokensText.json'
import FontAwesomeIcons from '@/static/data/fontAwesomeClasses.json'

const BgColorsKeys = Object.keys(BgColors)
const textColorsKeys = Object.keys(TextColors)

export default {
  title: 'Kit/Icons/IconCircle',
  component: IconCircle,
  argTypes: {
    bgColor: {
      options: BgColorsKeys,
      control: {
        type: 'select'
      },
      defaultValue: 'bg-red-400'
    },
    Color: {
      defaultValue: 'text-white',
      control: { type: 'select' },
      options: textColorsKeys
    },
    iconClass: {
      defaultValue: 'fas fa-award',
      control: { type: 'select' },
      options: FontAwesomeIcons
    },
    SizeClasses: {
      defaultValue: 'medium',
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    Shadow: {
      control: { type: 'select' },
      defaultValue: 'large',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge']
    }
  }
}

const Template = (args, { argTypes }) => {
  return {
    data() {
      return {
        newicon: {
          bgColor: this.bgColor,
          Color: this.Color,
          iconClass: this.iconClass,
          Shadow: this.Shadow,
          SizeClasses: this.SizeClasses
        }
      }
    },
    props: Object.keys(argTypes),
    components: { IconCircle },
    template: '<IconCircle :icon="this.newicon" v-bind="$props"></IconCircle>'
  }
}

export const Default = Template.bind({})
