import React, { useState } from "react";
import Film from "../data/data";
import Movicard from "./Moviecards";
import Renseigner from "./Renseigner";
const MovieList = () => {
  const [sheatem, setSheatem] = useState("");
  const [movies,setMovie]=useState(Film)
  //la fonction qui Ajoute un 
  const handleNewmovie=(newMovie)=>{
        setMovie([...movies,newMovie])
        console.log(newMovie)
  }
  const hanlesheatem = (e) => {
    let value = e.target.value;
    value = setSheatem(value);
  };
  return (
    <div>
      <Renseigner handleNewmovie={handleNewmovie} />
      <div>
        <input
          type="text"
          name="resch"
          placeholder="RECHERCHE"
          id="input"
          onChange={hanlesheatem}
        />
      </div>

      <div className="cards">
        {
          <div>
            <div className="recherche_resultat">
              {movies.filter((val) => {
                return (
                  val.titre
                    .toLocaleLowerCase()
                    .includes(sheatem.toLocaleLowerCase()) ||
                  val.note.toLocaleString().includes(sheatem.toLocaleString())
                );
              }).map((element) => {
                return <Movicard cardcine={element} />;
              })}
            </div>
          </div>
        }
      </div>
    </div>
  );
};
export default MovieList;
