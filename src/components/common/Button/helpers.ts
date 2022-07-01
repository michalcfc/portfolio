import { IconPosition } from "./types";

export const isCenterIcon = (iconPosition: IconPosition) => {
    return ['center'].includes(iconPosition)
}

export const isLeftIcon = (iconPosition: IconPosition) => {
    return ['left'].includes(iconPosition)
}

export const isRightIcon = (iconPosition: IconPosition) => {
    return ['right'].includes(iconPosition)
}