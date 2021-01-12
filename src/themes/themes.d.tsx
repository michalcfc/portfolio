import 'styled-components';

declare module 'styled-components' {

  
  export interface DefaultTheme {
    background: string;
    text: string;
    body: string; 
    colors: {
      [el: string]: string
    }
    buttonColor: {}
  }
}