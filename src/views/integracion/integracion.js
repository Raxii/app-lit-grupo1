import { LitElement, html, css } from "lit-element";
import "../../externos/equipo-5/register.js";
import "../home/table.js";

class Integracion extends LitElement {
    static get properties() {
        return {
            lista: { type: Array },
        };
    }

    constructor() {
        super();
        this.lista = [];
    }

    static get styles() {
        return css`
            :host {
                display: block;
                min-height: 100vh;
                padding: 40px 20px 56px;
                box-sizing: border-box;
                background: linear-gradient(180deg, #e8f0fb 0px, #f4f7fb 320px);
                color: #172b45;
                font-family: "Segoe UI", Arial, sans-serif;
            }
            main {
                max-width: 1120px;
                margin: 0 auto;
            }
            header {
                margin-bottom: 28px;
            }
            .marca {
                color: #2457a6;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 1.5px;
                text-transform: uppercase;
            }
            h1 {
                margin: 8px 0;
                color: #173b65;
                font-size: 34px;
            }
            header p {
                margin: 0;
                color: #64748b;
                line-height: 1.6;
            }
            section {
                margin-top: 22px;
                padding: 26px;
                border: 1px solid #dce5f0;
                border-radius: 14px;
                background: white;
                box-shadow: 0 6px 20px rgba(23, 59, 101, 0.06);
            }
            h2 {
                margin: 0 0 18px;
                color: #173b65;
                font-size: 20px;
            }
            @media (max-width: 620px) {
                :host {
                    padding: 22px 12px 36px;
                }
                h1 {
                    font-size: 27px;
                }
                section {
                    padding: 18px;
                }
            }
        `;
    }

    agregar(event) {
        let fila = {
            name: event.detail.nombre,
            ruc: "",
            email: "",
            phone: "",
            address: "",
        };
        this.lista = [...this.lista, fila];
    }

    render() {
        return html`
            <main>
                <header>
                    <div class="marca">Módulo de compras</div>
                    <h1>Gestión de proveedores</h1>
                    <p>Registro y consulta de proveedores del emprendimiento.</p>
                </header>

                <section>
                    <h2>Registrar producto</h2>
                    <wc-form-producto
                        @producto-registrado="${this.agregar}"
                    ></wc-form-producto>
                </section>

                <section>
                    <wc-table
                        .list="${this.lista}"
                    ></wc-table>
                </section>
            </main>
        `;
    }
}

window.customElements.define("wc-integracion", Integracion);