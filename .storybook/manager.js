// .storybook/manager.js

import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import cutomTheme from './customTheme'

addons.setConfig({
  theme: cutomTheme
})
