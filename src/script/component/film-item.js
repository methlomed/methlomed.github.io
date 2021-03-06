class FilmItem extends HTMLElement {
  set film(film) {
    this._film = film;
    this.render();
  }

  render() {
    this.classList.add('col-md-4');
    
    this.innerHTML = `        
        <div class="card mb-5 mt-5">
          <img src="${this._film.Poster}" class="card-img-top" height="400"/>
          <div class="card-body">
            <h5 class="card-title">${this._film.Title}</h5>
            <p class="card-text">${this._film.Year}</p>
          </div>
        </div>  
    `;
  }
}
customElements.define("film-item", FilmItem);