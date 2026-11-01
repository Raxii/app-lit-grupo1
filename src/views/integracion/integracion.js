import { LitElement, html, css } from "lit";
import "../home/table.js";

class Integracion extends LitElement {

  static properties = {
    lista: { type: Array }
  };

  constructor() {
    super();
    this.lista = [];
  }

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding: 35px;
      background: #f4f7fb;
      font-family: Arial, sans-serif;
    }

    main {
      max-width: 1100px;
      margin: auto;
    }

    h1 {
      color: #173b65;
    }
  `;

  render() {
    return html`
      <main>
        <h1>Gestión de proveedores</h1>

        <wc-table .list=${this.lista}></wc-table>
      </main>
    `;
  }
}

customElements.define("wc-integracion", Integracion);