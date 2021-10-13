import pages from './cms/pages/index.js';
// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true
// Usage with import from npm package
// import CMS, { init } from 'netlify-cms'
// Usage with script tag
const { CMS, initCMS: init } = window


const config = {
  local_backend: true,
  load_config_file: false,
  backend: {
    name: 'proxy',
    repo: 'http://localhost:8081/api/v1',
    branch: 'local-working',
  },
  media_folder: '/static/img',
  public_folder: '/img',
  collections: [pages],
};

init({ config });
CMS.registerPreviewTemplate();