import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    primaryColors: {
      'primary-text-color': string,
      'primary-background-color': string,
      'highlight-color': string,
    },

    secondaryColors: {
      'secondary-text-color': string,
      'secondary-background-color': string,
    },

    buttonColors: {
      'button-background-color': string,
      'button-text-color': string,
    },

    navigationColors: {
      'nav-bar-background-color': string,
      'nav-bar-text-color': string,
    },

    headerColors: {
      'nav-bar-background-color': string,
      'nav-bar-text-color': string,
      'nav-bar-text-second-color': string,
    },

    footerColors: {
      'background-color': string,
      'text-color': string,
      'text-second-color': string,
    },

    sidebarColors: {
      'nav-bar-background-color': string,
      'nav-bar-text-color': string,
      'nav-bar-text-second-color': string,
    },

    categoryColors: {
      'primary-text-color': string,
      'secondary-text-color': string,
      'primary-background-color': string,
    },

    newsColors: {
      'news-text-color': string,
      'primary-text-color': string,
      'secondary-text-color': string,
      'third-text-color': string,
      'primary-background-color': string,
    },
  }
}
