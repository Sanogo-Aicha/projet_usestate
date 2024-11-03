import React from "react";
import Movicard from "./Moviecards";
import Film from "../data/data";
function NewFilm() {
    return(
     Film.map((element)=>{
        return <Movicard cardcine={element}/>
      })
    )
}
export default NewFilm;