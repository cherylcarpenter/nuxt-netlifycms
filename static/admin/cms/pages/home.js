import seo from './../partials/seo.js'
import iconcircle from './../partials/iconcircle'
const home = {
  file: 'content/pages/home.md',
  label: 'home',
  name: 'Home',
  fields: [
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: ''
    },
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'page'
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
      required: false
    },
    seo,
    iconcircle
  ]
}
  
  export default home