import pages from './cms/pages/index.js';
// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true
// Usage with import from npm package
// import CMS, { init } from 'netlify-cms'
// Usage with script tag
const { CMS, initCMS: init } = window


const config = {
  local_backend: true,
  load_config_file: true,
  // backend: {
  //   name: 'git-gateway',
  //   repo: 'https://github.com/cherylcarpenter/nuxt-netlifycms',
  //   branch: 'local-working',
  //   auth_type: 'github',
  // },
  // media_folder: '/static/img',
  // public_folder: '/img',
  collections: [pages],
};

init({ config });
CMS.registerPreviewTemplate();
