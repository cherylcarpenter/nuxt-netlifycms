import FontAwesomeIcons from './faIcons.js'
import bgColors from './bgColors.js'
import textColors from './textColors.js'

const iconcircle = {
  label: 'Icon Circle',
  name: 'iconcircle',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'BgColor',
      name: 'BgColor',
      widget: 'select',
      options: bgColors,
      default: ['bg-red-400']
    },
    {
      label: 'Color',
      name: 'Color',
      widget: 'select',
      options: textColors,
      default: ['text-white']
    },
    {
      label: 'Shadow',
      name: 'Shadow',
      widget: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      default: ['large']
    },
    {
      label: 'Class',
      name: 'Class',
        widget: 'select',
        options: FontAwesomeIcons,
    
      required: false
    },
    {
      label: 'SizeClasses',
      name: 'SizeClasses',
      widget: 'select',
      options: ['small', 'medium', 'large'],
      default: ['large']
    }
  ]
}

export default iconcircle
