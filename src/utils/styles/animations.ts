import { keyframes } from 'styled-components';

import { ThemeAnimations } from './types';

export const SLIDE_IN_ANIMATION = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
  }
  1% {
    visibility: visible;
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const SLIDE_OUT_ANIMATION = keyframes`
  0% {
    visibility: visible;
    transform: translateX(0);
    opacity: 1;
  }
  99% {
    visibility: visible;
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
    visibility: hidden;
  }
`;

export const PARTIAL_FADE_OUT_ANIMATION = keyframes`
  0% {
    visibility: visible;
    opacity: 0.2;
  }

  99% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

export const PARTIAL_FADE_IN_ANIMATION = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  1% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 0.2;
  }
`;

export const FADE_OUT_ANIMATION = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  99% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

export const FADE_IN_ANIMATION = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  1% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

export const ANIMATIONS: ThemeAnimations = {
  fadeIn: FADE_IN_ANIMATION,
  fadeOut: FADE_OUT_ANIMATION,
  partialFadeIn: PARTIAL_FADE_IN_ANIMATION,
  partialFadeOut: PARTIAL_FADE_OUT_ANIMATION,
  slideIn: SLIDE_IN_ANIMATION,
  slideOut: SLIDE_OUT_ANIMATION,
};
