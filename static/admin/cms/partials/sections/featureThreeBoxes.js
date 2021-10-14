import iconcircle from './../iconcircle.js'
import cardIconParagraph from './cardIconParagraph.js'
import sectionSettings from './sectionSettings.js'

const featureThreeBoxes = {
  label: 'Feature Three Boxes',
  name: 'featureThreeBoxes',
  collapsed: false,
  description: 'Feature Three Boxes',
  widget: 'object',
  fields: [
    sectionSettings,
    {
      name: 'boxes',
      label: 'Boxes',
      widget: 'list',
      types: [cardIconParagraph]
    }
  ],
  max: 5,
  min: 1
}

export default featureThreeBoxes
