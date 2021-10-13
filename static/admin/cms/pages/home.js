import seo from './../partials/seo.js'
import iconcircle from './../partials/iconcircle.js'
import featureThreeBoxes from '../partials/sections/featureThreeBoxes.js'

const home = {
  file: 'content/pages/home.md',
  label: 'home',
  name: 'Home',
  format: 'frontmatter',

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
    {
      label: 'Sections',
      name: 'sections',
      widget: 'list',
      types: [featureThreeBoxes],
      collapsed: false,
      summary: 'Sections'
    }
    ]
}
  
  export default home