import React from "react";

const Movicard = ({ cardcine }) => {
  const { titre, description, note, posterUrl } = cardcine;
  console.log(posterUrl);

  return (

<div className="card">
      <div className="description">
        <h1>{titre}</h1>
        <p>{description}</p>
        <h2>{note}</h2>
      </div>
      <div className="video">
        <iframe
          src={posterUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
 
    
  );
};
export default Movicard;
