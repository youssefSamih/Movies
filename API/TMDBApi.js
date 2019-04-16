// API/TMDBApi.js
const API_TOKEN = "579e65bf91757e3ac866d2f15390ef4d"

// On rajoute le paramètre  &language=fr  dans l'URL pour avoir les résultats des films en français.
// le parametre page pour la pagination

export function getFilmsFromApiWithSearchedText (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text+"&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

// fonction pour construire l'url de l'mage

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
  
export function getFilmDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  /** getBestFilmsFromApi
 *  Récupérer les derniers meilleurs films de l'API TMDB, lorsque le component News est monté.
 *  L'URL à appeler est la suivante : 
 * https://api.themoviedb.org/3/discover/movie?api_key=API_TOKEN&vote_count.gte=1000&sort_by=release_date.desc&language=fr&page=1;
 */ 
export function getFilmBestFromApi (page) {
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_TOKEN + '&vote_count.gte=1000&sort_by=release_date.desc&language=fr&page=' + page)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}