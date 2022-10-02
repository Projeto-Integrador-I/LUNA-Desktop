const footer = document.createElement('template');

css = `
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 40vh;
  margin-top: 30px;

  background: #070707;
}

.footer_logo {
  padding-right: 60%;
}

.footer_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer span {
  padding: 10px;
  color: #fff;
}`

footer.innerHTML = `
<style>
  ${css}
</style>

<div class="footer">
  <img src="../../../assets/logo.png" alt="Luna Logo" class="footer_logo">
  <div class="footer_content">
    <span>&copy; Luna</span>
    <span>Todos direitos reservados</span>
  </div>
</div>`;

class VFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(footer.content.cloneNode(true));
  }
}
window.customElements.define('v-footer', VFooter);