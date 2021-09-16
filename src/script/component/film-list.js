import './film-item.js';

class FilmList extends HTMLElement {
  set films(films) {
    this._films = films;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._films.forEach(film => {
      const filmItemElement = document.createElement("film-item");
      filmItemElement.film = film;
      this.appendChild(filmItemElement);
    })
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `
    <h2>${message}</h2>
    `;
  }
}

customElements.define("film-list", FilmList);