class FilmItem extends HTMLElement {
  set film(film) {
    this._film = film;
    this.render();
  }

  render() {
    this.innerHTML = `
    
    `;
  }
}