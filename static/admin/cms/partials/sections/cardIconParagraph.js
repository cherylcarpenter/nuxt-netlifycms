import iconcircle from "./../iconcircle.js"

const cardIconParagraph = {
    label: 'Card Icon Paragraph',
    name: 'cardIconParagraph',
    widget: 'object',
    collapsed: true,
    fields: [
    iconcircle,
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
  }
  
  export default cardIconParagraph