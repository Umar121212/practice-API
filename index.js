// Данные о фильме
let moviePage = document.querySelector('.movie-page')
let imgPoster = document.querySelector('img-poster')
let titleMovie= document.getElementsByClassName('title')[0]
let yearMovie = document.querySelector('.year')
let plotMovie = document.querySelector('.plot')
let parentImg = document.querySelector('.img-poster')
let photoMovie = document.getElementById('poster') 

function getMovieInfo(title) {
    let api_key = "9992f4a5";
    let url = "http://www.omdbapi.com/?apikey=" + api_key + "&t=" + title;
  
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }
  
  function createMoviePage(movieInfo) {
    let title = movieInfo.Title;
    let year = movieInfo.Year;
    let plot = movieInfo.Plot;
    let poster = movieInfo.Poster;

    titleMovie.innerHTML = title;
    yearMovie.innerHTML = year;
    plotMovie.innerHTML = plot;
    photoMovie.src = poster;
   
  } 

//Поиск фильмов
const searchBtn = document.querySelector('.search-btn')
  searchBtn.addEventListener('click', () => {
    let titleMovie = document.querySelector('.search').value
    getMovieInfo(titleMovie)
    .then(movieInfo => {
      createMoviePage(movieInfo)
    })
    .catch(error=> {
      console.log('Search problems', error)
    })

  })


