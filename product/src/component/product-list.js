import { LitElement, html } from "lit";

export default class ProductList extends LitElement {
  static get properties() {
    return {
      products: {
        type: [],
      },
    };
  }

  constructor() {
    super();
    this.products = [];
  }

  render() {
    return html`
      <h1>List of Products2</h1>
      ${products}
    `;
  }
}

customElements.define("product-list", ProductList);
