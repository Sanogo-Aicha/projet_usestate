import React, { useState } from "react";
import Film from "../data/data";
import Movicard from "./Moviecards";
import Renseigner from "./Renseigner";
import { Link } from "react-router-dom";
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
      <Renseigner handleNewmovie={handleNewmovie} />
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
              })
              .map((element) => {
                return(
                  <div className="card">
                  <Link to={`desc/${element.id}`}>{element.titre},
                {element.note}</Link>
                </div>
                )
              })}
            </div>
            
          </div>
        }
      </div>
      
    </div>
  );
};
export default MovieList;
