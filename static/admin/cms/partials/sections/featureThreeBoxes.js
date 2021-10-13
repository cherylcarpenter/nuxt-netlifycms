import iconCircle from '../iconcircle.js'

const featureThreeBoxes = {
    label: 'Feature Three Boxes',
    name: 'featureThreeBoxes',
    collapsed: false,
    description:'Feature Three Boxes',
    widget: 'list',
    allow_add: true,
    // types: [cardIconParagraph],
    fields: [
        iconCircle,
          {
            label: 'Header',
            name: 'header',
            widget: 'string',
            required: true,
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'string',
            required: false,
          },
        ],
            max: 4,

  }
  
  export default featureThreeBoxes