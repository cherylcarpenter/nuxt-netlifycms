import { init } from 'netlify-cms-app';
import pages from './pages/index';
// import posts from './collections/posts';

// const cmsBranch = window.location.hostname.includes('localhost')
//   ? 'local-working'
//   : 'master';

const config = {
  local_backend: true,
  load_config_file: false,
  backend: {
    name: 'git-gateway',
    repo: 'https://github.com/cherylcarpenter/nuxt-netlifycms',
    branch: 'local-working',
    auth_type: 'github',
  },
  media_folder: '/static/img',
  public_folder: '/img',
  collections: [pages],
};

init({ config });
