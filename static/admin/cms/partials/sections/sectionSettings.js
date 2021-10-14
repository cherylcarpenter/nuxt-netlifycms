import bgColors from './../bgColors.js'
import { paddingTop, paddingBottom } from './sectionPaddings.js'
const sectionSettings = {
  label: 'Section Settings',
  name: 'sectionSettings',
  widget: 'object',
  collapsed: false,
  fields: [
    {
      name: 'hasBackground',
      label: 'Has Background',
      widget: 'boolean',
      default: false
    },
    {
      name: 'sectionBkgColor',
      label: 'Section Background Color',
      widget: 'select',
      options: bgColors,
      default: ['bg-white']
    },
    {
      name: 'paddingTop',
      label: 'Padding Top',
      widget: 'select',
      options: paddingTop,
      default: ['0']
    },
    {
      name: 'paddingBottom',
      label: 'Padding Bottom',
      widget: 'select',
      options: paddingBottom,
      default: ['0']
    }
  ]
}

export default sectionSettings
