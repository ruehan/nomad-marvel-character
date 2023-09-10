// src/themes.ts
export interface Theme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    border: string;
  }
  
  export const lightTheme: Theme = {
    body: '#f4f7f8',
    text: 'black',
    toggleBorder: '#FFF',
    background: 'white',
    border: '1px solid #f4f7f8'
  };
  
  export const darkTheme: Theme = {
    body: '#272829',
    text: 'white',
    toggleBorder: '#6B8096',
    background: 'black',
    border: '0px solid gray'
  };
  