import React, { useState } from "react";
import "./Renseigner.css";
import NewFilm from "./NewFilm";
function Renseigner({ handleNewmovie }) {
  //Le state qui recupère les valeurs de mon formulaire//
  const [newMovieFrom, setNewMovieForm] = useState({
    titre: "",
    note: 0,
    description: "",
    posterUrl: "",
  });
  //La fonction qui recupère les valeurs de mon formulaire//
  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value)
    setNewMovieForm ({
        ...newMovieFrom,
        [e.target.name]:e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewmovie(newMovieFrom);
  };
  return (
    <div className="renseigner">
      <div className="new_Film">
        <h1>Rentrer un nouveau Film</h1>
      </div>
      <form>
        <input
        name="titre"
          type="text"
          placeholder="entrez le titre du film"
          value={newMovieFrom.titre}
          onChange={handleChange}
        />
        <p></p>
        <input

          type="text"
          name="note"
          placeholder="entrez la note du film"
          value={newMovieFrom.note}
          onChange={handleChange}
        />
        <p></p>
        <input
          type="texte"
          name="posterUrl"
          id=""
          placeholder="Url de la video"
          value={newMovieFrom.posterUrl}
          onChange={handleChange}
        />
        <p></p>
        <textarea
          name="description"
          id="texterea"
          placeholder="description"
          value={newMovieFrom.description}
          onChange={handleChange}
        ></textarea>
        
      </form>
      <button className="button" type="submit" onClick={handleSubmit}>Ajouter</button>
     
    </div>
  );
}
export default Renseigner;
