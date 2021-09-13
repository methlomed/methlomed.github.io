import film from './films.js';

class DataSource {
    static searchFilm(keyword) {
        return new Promise((resolve, reject) => {
            const filteredFilms = films.filter(film => film.Title.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredFilms.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found`);
            }
        });
    }
}

export default DataSource;