class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this. innerHTML =`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,128L48,149.3C96,171,192,213,288,240C384,267,480,277,576,250.7C672,224,768,160,864,133.3C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    `;
  }
}

customElements.define("foot-bar", FootBar);