import {darken, lighten} from 'polished';

export const COLORS = {
  white: '#fff',
  black: '#212529',
  brand: '#2467ec',
  lightBrand: '#e2d9f3',
  darkBrand: darken(0.1, '#4c89fb'),
  orange: 'orange',
  green: 'green',
  blue: '#4c89fb',
  lightBlue: '#f1f5ff',
  darkBlue: "#04297a",
  yellow: '#ffc61b',
  glass: 'hsla(0, 0%, 100%, 0.8)',
  red: '#e11d48',
  redLight: lighten(0.1, '#e11d48'),
  gray: '#687385',
  gray300: '#9ca3af',
  lightGray: '#f6f8fb',
  darkGray: '#4a5568',
  gradient: 'linear-gradient(270deg,#ffb04f 40%,#ff8961,#ff50b8,#cb5eee)',
};
