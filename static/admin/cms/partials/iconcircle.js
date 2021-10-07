import FontAwesomeIcons from '@/static/data/fontAwesomeClasses.json'

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
      options: [],
      default: ['bg-red-400']
    },
    {
      label: 'Color',
      name: 'Color',
      widget: 'select',
      options: [],
      default: ['text-white']
    },
    {
      label: 'Shadow',
      name: 'Shadow',
      widget: 'select',
      options: ['small', 'medium', 'large'],
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
      widget: 'string',
      required: false
    }
  ]
}

export default iconcircle
