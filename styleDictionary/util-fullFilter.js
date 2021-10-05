const fullFilter = (token) =>
  [
    'screens',
    'colors',
    'spacing',
    'opacity',
    'borderRadius',
    'borderWidth',
    'boxShadow',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'maxWidth',
    'zIndex',
    'scale',
    'transitionProperty',
    'transitionTimingFunction',
    'transitionDuration',
    'transitionDelay',
    'animation'
  ].includes(token.attributes.category)

export default fullFilter
