import shift from "./shift";
import { isUnoccupied, isEnemyOccupied } from "./getRange";

const isLinearThreat = function(boardState, kingSqr) {
  let isThreat = false;
  const { isWht } = boardState[kingSqr].piece;

  function getEnemySqrByDirection(dir) {
    let testSqr = shift[dir](kingSqr);
  
    while (testSqr.length > 1) {
      if (!isUnoccupied(testSqr, boardState)) {
        if (isEnemyOccupied(testSqr, boardState, isWht)) {
          return testSqr;
        } else return null;
      }
      testSqr = shift[dir](testSqr);
    }
  
    return null;
  }

  Object.keys(shift).forEach(dir => {
    const enemySqr = getEnemySqrByDirection(dir);
    if (enemySqr) {
      if (dir === "wht" || dir === "blk" || dir === "alph" || dir === "unAlph") {
        if (boardState[enemySqr].piece.type === "Q" || boardState[enemySqr].piece.type === "R") {
          isThreat = true;
        }
      } else if (boardState[enemySqr].piece.type === "Q" || boardState[enemySqr].piece.type === "B") {
        isThreat = true;
      }
    } 
  })
  return isThreat;

}

const isPawnThreat = function(boardState, kingSqr) {
  const { isWht } = boardState[kingSqr].piece;
  const color = isWht ? "wht" : "blk";

  let testSqr = shift[color + "Alph"](kingSqr);
  if (isEnemyOccupied(testSqr, boardState, isWht) && boardState[testSqr].piece.type === "P") {
    return true;
  }

  testSqr = shift[color + "UnAlph"](kingSqr);
  if (isEnemyOccupied(testSqr, boardState, isWht) && boardState[testSqr].piece.type === "P") {
    return true;
  }

  return false;
}



const isThreat =  {
  linear: isLinearThreat,
  pawn: isPawnThreat
  //,
  //direct: isDirectThreat(boardState, kingSqr)
}

export default isThreat;