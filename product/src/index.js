import { html, render } from "lit";
import "./component/product-list";
import faker from "faker";

const el = document.querySelector("#dev-products");

console.log("Rendering ProductList");
let products = [];

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products.push(html`<div>${name}</div>`);
}

render(html`<product-list products=${products}></product-list>`, el);
