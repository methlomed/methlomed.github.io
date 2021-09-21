class DataSource {
    static searchFilm(keyword) {
        return fetch(`http://www.omdbapi.com/?apikey=3fa921ae&s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.teams) {
                return Promise.resolve(responseJson.films);
                
            } else {
                return Promise.reject(`${keyword} is not found`)
            }
        })
    }
}

export default DataSource;