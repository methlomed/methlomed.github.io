class FilmItem extends HTMLElement {
  set film(film) {
    this._film = film;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="container">
          <hr>    
          <div class="row" id="film-list">
            <div class="col-md-4">   
              <div class="card">
                <img src="./img/${this._film.Poster}" class="card-img-top"/>
                <div class="card-body">
                  <h5 class="card-title">${this._film.Title}</h5>
                  <p class="card-text">${this._film.Year}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
    
            </div>
          </div>
        </section>
    `;
  }
}
customElements.define("film-item", FilmItem);