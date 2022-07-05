import { IconPosition } from './types';

export const isCenterIcon = (iconPosition: IconPosition) => ['center'].includes(iconPosition);

export const isLeftIcon = (iconPosition: IconPosition) => ['left'].includes(iconPosition);

export const isRightIcon = (iconPosition: IconPosition) => ['right'].includes(iconPosition);
