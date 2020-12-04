import { get } from "mongoose";
import React from "react";

function Piece(props) {
  const { isWht, type } = props;

  function getImgSrc(){
    return `https://images.chesscomfiles.com/chess-themes/pieces/neo/150/${isWht ? "w" : "b"}${type.toLowerCase()}.png`;
  }

  return (
      <img className="piece" style={{height: "100%", width: "100%"}} src={getImgSrc()}/>
  );
}

export default Piece;