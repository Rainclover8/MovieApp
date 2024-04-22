import React from 'react'

function DetailPage({movie}) {
    console.log(movie)

  return (
    <div>
      <h1>Detay Sayfası</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <hr />
      <h2>Başlık: {movie.Title}</h2>
      <hr />
      <h3>Aktörler: {movie.Actors}</h3>
      <hr />
      <h3>Country: {movie.Country}</h3>
      <hr />
      <h3>Dil: {movie.Language}</h3>
    </div>
  )
}

export default DetailPage
