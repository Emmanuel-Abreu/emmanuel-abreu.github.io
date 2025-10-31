import React from "react";
import ArtPiece from "../../components/ArtPiece";
import '../../assets/styles/Projects.css'

export default function Projects(props){
  const listOfProjects = props.listOfProjects;

  return(
    <div className="Projects">
      <ArtPiece/>
      <ArtPiece/>
      <ArtPiece/>
      <ArtPiece/>
    </div>
  );
}