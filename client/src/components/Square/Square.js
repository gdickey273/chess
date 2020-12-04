import React, { useContext } from "react";
import "./style.css";
import Piece from "../Piece";

function Square(props) {
  const { sqrIsWht, name, boardState } = props;
  //const boardState = useContext(PositionContext);
  
  return (
    <>
    {boardState && 
    <div className={ sqrIsWht ? "whtSquare square" : "blkSquare square" } >
      { boardState[name]?.piece &&
        <Piece type={boardState[name].piece.type} isWht={boardState[name].piece.isWht} />
      } 
    </div>
    }
    </>
  )
}

export default Square;