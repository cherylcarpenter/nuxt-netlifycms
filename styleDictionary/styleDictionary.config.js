// @ts-nocheck
const _ = require('lodash')
const StyleDictionary = require('style-dictionary')
const getTokens = require('./getTailwindTokens.js')

const justBgColors = (token) => ['colors'].includes(token.attributes.category)
const justTextColors = (token) =>
  ['textColor'].includes(token.attributes.category)

const tokens = getTokens.getTailwindTokens()
const buildPath = './static/data/'
const scssPath = '/assets/scss/'

function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

StyleDictionary.registerTransform({
  name: 'name/kebabForBg',
  type: 'name',
  matcher(prop) {
    return prop.attributes.category === 'colors'
  },
  transformer(prop) {
    const arrayOfNames = prop.name.split('-')
    const filteredAry = arrayOfNames.filter((e) => e !== 'colors')

    const newArray = []

    filteredAry.forEach((segment, i) => {
      if (i === filteredAry.length - 1) {
        newArray.push(segment)
      } else if (i !== 0) {
        newArray.push(segment)
      } else {
        newArray.push(segment)
      }
    })
    if (newArray.length === 3) {
      const first = newArray[0]
      const second = titleCase(newArray[1])

      newArray.splice(0, 2)
      newArray.splice(0, 0, first + second)
    }
    newArray.splice(0, 0, 'bg')

    return newArray.join('-')
  }
})

StyleDictionary.registerTransform({
  name: 'name/kebabForText',
  type: 'name',
  matcher(prop) {
    return prop.attributes.category === 'textColor'
  },
  transformer(prop) {
    const arrayOfNames = prop.name.split('-')
    const filteredAry = arrayOfNames
      .filter((e) => e !== 'text')
      .filter((e) => e !== 'color')

    const newArray = []

    filteredAry.forEach((segment, i) => {
      if (i === filteredAry.length - 1) {
        newArray.push(segment)
      } else if (i !== 0) {
        newArray.push(segment)
      } else {
        newArray.push(segment)
      }
    })
    if (newArray.length === 3) {
      const first = newArray[0]
      const second = titleCase(newArray[1])

      newArray.splice(0, 2)
      newArray.splice(0, 0, first + second)
    }
    newArray.splice(0, 0, 'text')

    return newArray.join('-')
  }
})

StyleDictionary.registerTransformGroup({
  name: 'tokens-js-bg',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'size/px',
    'color/css',
    'name/kebabForBg'
  ]
})

StyleDictionary.registerTransformGroup({
  name: 'tokens-js-text',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'size/px',
    'color/css',
    'name/kebabForText'
  ]
})

module.exports = {
  tokens,
  platforms: {
    json: {
      transformGroup: 'tokens-js-bg',
      buildPath,
      files: [
        {
          format: 'json/flat',
          destination: 'tokensBg.json',
          filter: justBgColors,
          options: {
            outputReferences: false
          }
        }
      ]
    },
    json2: {
      transformGroup: 'tokens-js-text',
      buildPath,
      files: [
        {
          format: 'json/flat',
          destination: 'tokensText.json',
          filter: justTextColors,
          options: {
            outputReferences: false
          }
        }
      ]
    },
    jsonAll: {
      transformGroup: 'js',
      buildPath,
      files: [
        {
          format: 'javascript/module',
          destination: 'tokensAll.js',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      scssPath,
      files: [
        {
          format: 'scss/variables',
          destination: './assets/scss/_variables.scss',
          options: {
            outputReferences: false
          }
        }
      ]
    }
  }
}
