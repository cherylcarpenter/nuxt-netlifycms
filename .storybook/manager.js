// .storybook/manager.js

import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import cutomTheme from './customTheme'

addons.setConfig({
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: cutomTheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other']
  }
})
