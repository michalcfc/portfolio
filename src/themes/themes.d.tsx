import { Keyframes } from 'styled-components';

declare module 'styled-components' {

  export interface DefaultTheme {
    textColor: string
    background: string
    buttons: any,
    alerts: {
      [el: string]: {
        [el: string]: string
      }
    },
    badges: any,
    colors: {
      [el: string]: string
    },
    borderRadius: {
      [el: string]: string
    },
    boxShadows: {
      [el: string]: string
    },
    fontWeights: {
      [el: string]: number
    }
    spacing: {
      [el: string]: string
    },
    fontSizes: {
      [el: string]: string
    }
    avatarSize: {
      [el: string]: string
    }
    animations: {
      [el: string]: Keyframes
    }
  }
}
