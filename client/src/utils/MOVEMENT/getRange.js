import shift from "./shift";




const getRange = function (currentSquareArg, boardStateArg) {
  const currentSquare = currentSquareArg;
  const boardState = boardStateArg;
  console.log("+++++++++++board state++++++++++++ ", boardState);
  const { isWht, type } = boardState[currentSquare].piece;
  const range = [];
  const color = isWht ? "wht" : "blk";
  switch (type) {
    case "P":
      return getPawnRange();
    // case "R":
    //   return getRookRange();
    // case "N":
    //   return getKnightRange();
    // case "B":
    //   return getBishopRange();
    // case "Q":
    //   return getQueenRange();
    // case "K":
    //   return getKingRange();
  }

  function isUnoccupied(sqrName) {
    const result = boardState[sqrName]?.piece ? false : true;
    console.log(`isUnoccupied(${sqrName}) result = ${result}`);
    return result;
  }
  
  function isEnemyOccupied(sqrName) {
    if (isUnoccupied(sqrName)) return false;
    const result = boardState[sqrName].piece.isWht !== isWht;
    console.log(`isEnemyOccupied(${sqrName}) result = ${result}`);
    return result;
  }

  function getPawnRange() {

    let isFirstMove = false;
    if (isWht && currentSquare[1] === "2") {
      isFirstMove = true;
    } else if (!isWht && currentSquare[1] === "7") {
      isFirstMove = true;
    }
    
    //Tests to see square in front of pawn is unoccupied
    let testSqr = shift[color](currentSquare);
    
    if (isUnoccupied(testSqr)) {
      range.push(testSqr);
      if (isFirstMove) {
        //if square is unoccupied and its first move, check next square in front of pawn
        testSqr = shift[color](testSqr);
        if (isUnoccupied(testSqr)) {
          range.push(testSqr)
        }
      }
    }

    //Check diagonals 
    testSqr = shift[color + "Alph"](currentSquare);
    console.log("testSqr================ ", testSqr);
    if (isEnemyOccupied(testSqr)) {
      range.push(testSqr)
    }

    testSqr = shift[color + "UnAlph"](currentSquare);
    if (isEnemyOccupied(testSqr)) {
      range.push(testSqr)
    }



    return range;
    
  }
}

export default getRange;
