class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top bg-transparent">
          <div class="container">
            <a class="navbar-brand" href="#">RestAPI-Film</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <a class="nav-link active" aria-current="page" href="https://www.dicoding.com">dicoding</a>
                
                
              </div>
            </div>
          </div>
        </nav>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path
            fill="#a2d9ff"
            fill-opacity="1"
            d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,112C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg> 
    `;
  }
}

customElements.define("app-bar", AppBar);