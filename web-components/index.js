 /**
 * Web Components is custom, reusable and extendable component created using without any framework
 * Main Components:
 * 1. Custom Element
 *    This is used to created new custom element from the class which got inherited from HTMLElement
 *    We can add properities to the custom html through getters and setters
 *    It has element lifecycle built in it.
 *    Once we have created the class we can use customElement.define to register it and use it in our html
 * 
 * 2. Shadow DOM:
 *    In layman terms, it a dom separted from the main dom there by
 *    encapsulates the style properties and nodes from the main doc
 *    This avoid our styles bleeding in and bleeding out.
 *    Light DOM + Shadow DOM = Flatted DOM ref: https://goo.gl/WbvTMm
 * 3. HTML Templates:
 *    HTML Templates are new html element where the content will be parsed but wont't
 *    be rendered until we need to do some modification with js
 *    Using template we can created content for shadow dom to use in custom components
 * 4. HTML Imports
 *    Part of Web Components used to import html file into another html file 
 */

class AppDrawer extends HTMLElement {
  constructor() {
    super()
    this.addEventListener('click', (e) => {
      if (this.disabled) {
        return
      }

      this.toggleDrawer()
    })
  }

  static get observedAttributes() {
    return ['disabled']
  }

  set disabled(value) {
    if (value) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }



  // LifeCyles methods for the custom Elements
  connectedCallback() {
    this.innerHTML = 'This is attached during connected callback'
  }

  disconnectedCallback() {
    this.innerHTML = ''
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.disabled) {
      this.setAttribute('tabindex', '-1');
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.setAttribute('tabindex', '0');
      this.setAttribute('aria-disabled', 'false');
    }
  }
}

customElements.define('app-drawer', AppDrawer)


let tmpl = document.createElement('template')
tmpl.innerHTML = `
  <style>:host { ... }</style> <!-- look ma, scoped styles -->
  <b>I'm in shadow dom!</b>
  <slot></slot>`

let tempTwo = document.querySelector('#x-foo-from-template')

  
customElements.define('x-foo-shadowdom-template', class extends HTMLElement {
  constructor() {
    super()


    let shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(tempTwo.content.cloneNode(true))
  }
})


class FancyButton extends HTMLButtonElement {
  constructor() {
    super(); // always call super() first in the constructor.
    this.addEventListener('click', e => this.drawRipple(e.offsetX, e.offsetY));
  }

  // Material design ripple animation.
  drawRipple(x, y) {
    let div = document.createElement('div');
    div.classList.add('ripple');
    this.appendChild(div);
    div.style.top = `${y - div.clientHeight/2}px`;
    div.style.left = `${x - div.clientWidth/2}px`;
    div.style.backgroundColor = 'currentColor';
    div.classList.add('run');
    div.addEventListener('transitionend', e => div.remove());
  }
}

customElements.define('fancy-button', FancyButton, {extends: 'button'});

