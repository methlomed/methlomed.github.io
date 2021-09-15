import '../component/search-bar.js';
import '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("film-list");

  const onButtonSearchClicked = async () => {
      try {
          const result = await DataSource.searchFilm(searchElement.value);
          renderResult(result);
      } catch (message) {
          fallbackResult(message)
      }
  };

  const renderResult = results => {
      filmListElement.innerHTML = "";
      results.forEach(film => {
          const { Title, Poster, Year } = film;
          const clubElement = document.createElement("div");
          clubElement.setAttribute("class", "film");

          filmElement.innerHTML = `
          <section class="container">
          <hr    
          <div class="row" id="film-list">
            <div class="col-md-4">   
              <div class="card">
                <img src="./img/${Poster}" class="card-img-top"/>
                <div class="card-body">
                  <h5 class="card-title">${Title}</h5>
                  <p class="card-text">${Year}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
    
            </div>
          </div>
        </section>
          `;

          clubListElement.appendChild(filmElement);
      })
  };

  const fallbackResult = message => {
      clubListElement.innerHTML = "";
      clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;