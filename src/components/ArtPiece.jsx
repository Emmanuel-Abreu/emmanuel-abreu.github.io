import React from "react";
import '../assets/styles/ArtPiece.css'

export default function ArtPiece(props){
  const src = props.src;
  const title = props.title;
  const altText = props.altText;
  const description = props.description;

  return (
    <div className="ArtPiece">
      <img src={src} alt={altText} />
      <p>{title}</p>
    </div>
  );
}