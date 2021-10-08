const blog = {
    file: 'content/pages/blog.md',
    label: 'blog',
    name: 'Blog',
    format: 'frontmatter',

    fields: [
      {
        label: 'Layout',
        name: 'layout',
        widget: 'hidden',
        default: '',
      },
      {
        label: 'Type',
        name: 'type',
        widget: 'hidden',
        default: 'page',
      },
      {
        label: 'Title',
        name: 'title',
        widget: 'string',
        default: '',
        required: false,
      }
    ],
  }
  
  export default blog