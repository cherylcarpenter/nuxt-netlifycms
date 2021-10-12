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
        type: 'select',
      },
    },
    Color: {
      control: { type: 'select' },
      options: textColorsKeys
    },
    iconClass: {
      control: { type: 'select' },
      options: FontAwesomeIcons
    },
    SizeClasses: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    Shadow: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge']
    },
  } 
}


const Template = (args , { argTypes }) => {

  return{
    data() {
      return {
        newicon: {
          bgColor: this.bgColor,
          Color: this.Color,
          Shadow: this.Shadow,
          iconClass: this.iconClass,
          SizeClasses: this.SizeClasses
        }
      }
    },
    props: Object.keys(argTypes), 
    components: { IconCircle },
    template: '<IconCircle :icon="this.newicon"></IconCircle>'
  }

  
}

export const Default = Template.bind({})
Default.args = {
  bgColor: 'bg-red-400',
  Color: 'text-white',
  iconClass: 'fas fa-award',
  Shadow: 'large',
  SizeClasses: 'medium',
  icon: {
    bgColor: 'bg-red-400',
    Color: 'text-white',
    iconClass: 'fas fa-award',
    Shadow: 'large',
    SizeClasses: 'medium'
  }
}

