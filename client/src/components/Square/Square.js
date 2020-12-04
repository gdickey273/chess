import React from "react";
import Pawn from "../Pawn";
import Rook from "../Rook";
import Knight from "../Knight";
import Bishop from "../Bishop";
import Queen from "../Queen";
import King from "../King";

function Square(props) {
  const { squareColor, currentPiece } = props;

  function getPieceComponent() {
    switch (currentPiece.type) {
      case "P" : 
      return <Pawn color={currentPiece.color}/>;
      case "R" :
        return <Rook color={currentPiece.color}/>;
      case "N" :
        return <Knight color={currentPiece.color}/>;
      case "B" : 
        return <Bishop color={currentPiece.color}/>
      case "Q" : 
        return <Queen color={currentPiece.color}/>
      case "K" :
        return <King color={currentPiece.color}/>
    }
  }
  
  return (
    <>
    <div className={squareColor + "Square"} >
      {getPieceComponent()}
    </div>
    </>
  )
}

export default Square;