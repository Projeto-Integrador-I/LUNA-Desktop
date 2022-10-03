const footer = document.createElement('template');

css = `
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 35vh;
  margin-top: 30px;

  background: #070707;
}

.footer_options {
  display: flex;
  align-items: row;
  list-style: none;
  color: #757575;
  gap: 21px;
  font-size: 16pt;
}

.footer_socials {
  display: flex;
  list-style: none;
  margin: 15px;
  gap: 50px;
  padding: 0;
}

.footer_social {
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer_social:hover {
  cursor: pointer;
}

.footer_option:hover {
  cursor: pointer;
  text-decoration: underline;
}

.footer_content {
  padding-top: 15px;
  color: #fff;
}`

footer.innerHTML = `
<style>
  ${css}
</style>

<div class="footer">
  <img src="../../../assets/footer_logo.png" alt="Luna Logo" class="footer_logo">
  <div>
    <ul class="footer_options">
      <li class="footer_option">Sobre</li>
      <li class="footer_option">Contato</li>
      <li class="footer_option">Termos de Uso</li>
      <li class="footer_option">Política de Privacidade</li>
    </ul>
  </div>
  <div>
    <ul class="footer_socials">
      <li>
        <div class="footer_social">
          <img src="../../../assets/facebook_logo.png" alt="facebook">
        </div>
      </li>
      <li>
        <div class="footer_social">
          <img src="../../../assets/insta_logo.png" alt="instagram">
        </div>
      </li>
      <li>
        <div class="footer_social">
          <img src="../../../assets/twitter_logo.png" alt="twitter">
        </div>
      </li>
      <li>
        <div class="footer_social">
          <img src="../../../assets/github_logo.png" alt="github">
        </div>
      </li>
    </ul>
  </div>
  <div class="footer_content">
    <span>Copyright 2022 &copy; LUNA. Todos os direitos reservados</span>
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