import IconCircle from '@/components/Icons/IconCircle.vue'
import BgColors from '@/static/data/tokensBg.json'
import TextColors from '@/static/data/tokensText.json'
import FontAwesomeIcons from '@/static/data/fontAwesomeClasses.json'
import { getKeys } from '@/utils/helperUtils'

const bgColors = getKeys(BgColors)
const textColors = getKeys(TextColors)
export default {
  title: 'Kit/Icons/IconCircle',
  component: IconCircle,
  argTypes: {
    BgColor: {
      control: { type: 'select' },
      options: bgColors.result
    },
    Color: {
      control: { type: 'select' },
      options: textColors.result
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
    }

  }
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconCircle },

  template: '<IconCircle v-bind="$props" :iconClass="iconClass"/>'
})

export const Default = Template.bind({})
Default.args = {
  icon: {
    BgColor: 'bg-red-400',
    Color: 'text-white',
    iconClass: 'fas fa-award',
    Shadow: 'large',
    SizeClasses: 'medium'
  }
}
