import './film-item.js';

class FilmList extends HTMLElement {
  set films(films) {
    this._films = films;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._films.forEach((film) => {
      const filmItemElement = document.createElement('film-item');
      filmItemElement.film = film;
      this.appendChild(filmItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
    <section class="container">
      <div class="row mb-3" id="film-list">
        <div class="col-md justify-content-center">       
             <h2>${message} :(</h2>       
        </div>
      </div>
    </section>   
    `;
  }
}

customElements.define('film-list', FilmList);
