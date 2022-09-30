const header = document.createElement('template');

css = `.header {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10%;
  padding: 10px 100px;
  position: relative;
}

.logo {
  height: 80%;
}

.menu-options {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 0;
  padding: 0;
  width: 60%;
}

.menu-option {
  margin-left: 50px;
  font-style: none;
  list-style: none;
  text-transform: uppercase;
}

.menu-option a {
  color: #717171;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
}

.menu-option a:hover {
  color: #fff;
}

.option-active {
  color: #fff !important;
}

.perfil {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  align-self: flex-end;
  position: absolute;
  top: 40px;
  right: 330px;
}

.perfil img {
  cursor: pointer;
  margin-left: 10px;
}`

header.innerHTML = `
<style>
  ${css}
</style>

<div class="header">
  <img src="../../../assets/moon.svg" alt="Luna logo" class="logo">
  <ul class="menu-options">
      <li class="menu-option"><a href="../Home/home.html" class="option-active">Home</a></li>
      <li class="menu-option"><a href="../lists/index.html">Listas</a></li>
      <li class="menu-option"><a href="../search/index.html">Pesquisas</a></li>
  </ul>
  <div class="perfil">
      <span>Fernando</span>
      <img src="../../../assets/User.svg" alt="user-icon" srcset="">
  </div>
</div>`;

class VHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(header.content.cloneNode(true));
  }
}
window.customElements.define('v-header', VHeader);