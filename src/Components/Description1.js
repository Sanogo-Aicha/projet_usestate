import React, { Component } from 'react';
import "./Description.css"
import { Link, useParams } from 'react-router-dom';
import Film from '../data/data';
export default function Description1 () {
    let id=useParams().id
    let movies=Film.find((elt)=>{
      return elt.id==id;
    })
    return (
      <div className='container'>
        <p>
          {movies.description}
        </p>
        <a href={movies.posterUrl} >{movies.posterUrl} </a>
        <button><Link to="/">Retour</Link></button>
        </div>
    )
  
}
