export function getCustomProperty(elem, prop) {
  return  parseFloat(getComputeStyle(elem).getPropertyValue(prop)) || 0
}

export function setCustomProperty(elem, prop, value) {
  elem.style.setProperty(prop, value)
}

export function incrementCustomProperty(elem, prop, inc) {
  setCustomProperty(elem, prop, getComputedStyle(elem, prop) + inc)
}