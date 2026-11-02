import { LitElement, html, css } from 'lit';

export class FormProducto extends LitElement {
  static styles = css`
    :host { display:block; }
    form { display:grid; gap:16px; }
    label { display:grid; gap:7px; font-weight:600; }
    input { padding:11px; border:1px solid #cbd5e1; border-radius:6px; font:inherit; min-width:0; }
    button { background:#225c47; color:white; border:0; padding:12px; border-radius:6px; font:inherit; cursor:pointer; }
  `;

  registrar(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const datos = new FormData(form);
    this.dispatchEvent(new CustomEvent('producto-registrado', {
      detail: { nombre: datos.get('nombre').trim(), categoria: datos.get('categoria').trim(), precio: Number(datos.get('precio')) },
      bubbles: true,
      composed: true
    }));
    form.reset();
  }

  render() {
    return html`
      <form @submit=${this.registrar}>
        <label>Nombre<input name="nombre" required></label>
        <label>Categoría<input name="categoria" required></label>
        <label>Precio ($)<input name="precio" type="number" min="0" step="0.01" required></label>
        <button type="submit">Registrar producto</button>
      </form>
    `;
  }
}
customElements.define('wc-form-producto', FormProducto);
