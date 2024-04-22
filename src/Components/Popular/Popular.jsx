import React, { useEffect, useState } from "react";
import "../Popular/Popular.css";
import DetailPage from "../DetailPage";

function Popular() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const [showDetail, setShowDetail] = useState(false)
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${search}&apikey=2f84dc3d`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [search]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () =>{
    setShowDetail(!showDetail)
  }
  const handleShowDetail = () => {
    setShowDetail(true);
  };
  const handleCloseDetail = () => {
    setShowDetail(false);
  };
  return (
    <div>
      <form>
        <input type="text" name="" id="" onChange={changeHandler} />
      </form>

      {movie &&
        <div>
          <img src={movie.Poster} alt={movie.Title} />
          <hr />
          {/* <h1>Başlık: {movie.Title}</h1>
          <hr /> */}
          {/* <h2> Aktörler: {movie.Actors}</h2>
          <hr />
          <h3>Country: {movie.Country}</h3>
          <hr />
          <h4>Dil: {movie.Language}</h4> */}
        </div>
      }
      <button onClick={handleClick}>Detay sayfası</button>
      {showDetail && (
        <div className="popup">
          <div className="popup-inner">
            <button onClick={handleCloseDetail} className="close-btn">
              X
            </button>
            <DetailPage movie={movie} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Popular;
