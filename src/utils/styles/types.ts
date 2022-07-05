import { Keyframes } from 'styled-components';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AnimationName =
    | 'fadeIn'
    | 'fadeOut'
    | 'partialFadeIn'
    | 'partialFadeOut'
    | 'slideIn'
    | 'slideOut';
export type ThemeAnimations = Record<AnimationName, Keyframes>;

export type Colors =
    | 'brand'
    | 'lightBrand'
    | 'darkBrand'
    | 'blue'
    | 'lightBlue'
    | 'darkBlue'
    | 'yellow'
    | 'white'
    | 'glass'
    | 'red'
    | 'gray'
    | 'darkGray'
    | 'lightGray'
    | 'black'
    | 'gradient';

export type Sizes =
    | 'max-content'
    | 'min-content'
    | 'full'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl';
