import { incrementCustomProperty } from "./updateCustomProperty"

const groundElems =document.querySelectorAll("[data-ground]")

const SPEED = .05


export function updateGround(delta) {
groundElems.forEach(ground => {
  incrementCustomProperty(ground, "--left", delta * SPEED * -1)
})
}