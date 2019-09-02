import { css } from "styled-components";

export default class MediaQueries {

  constructor() {
  }

  static sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
  };
  
  // Iterate through the sizes and create a media template
  static queries = Object.keys(this.sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${this.sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;
  
    return acc;
  }, {});
}