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
    case "R":
      return getRookRange();
    case "N":
      return getKnightRange();
    case "B":
      return getBishopRange();
    case "Q":
      return getQueenRange();
    case "K":
      return getKingRange();
  }

 

  function getBoundsByDirection(dir) {
    let bounds = currentSquare;
    let testSqr = shift[dir](currentSquare);

    while (testSqr.length > 1) {

      if (!isUnoccupied(testSqr, boardState)) {
        if (isEnemyOccupied(testSqr, boardState, isWht)) {
          return testSqr;
        } else return bounds;
      }
      bounds = testSqr;
      testSqr = shift[dir](testSqr);
    }

    return bounds;
  }

  function getLinearRange(dir) {
    let testSqr = currentSquare;
      let bounds = getBoundsByDirection(dir);
      while (testSqr !== bounds) {
        testSqr = shift[dir](testSqr);
        range.push(testSqr);
      }
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

    if (isUnoccupied(testSqr, boardState)) {
      range.push(testSqr);
      if (isFirstMove) {
        //if square is unoccupied and its first move, check next square in front of pawn
        testSqr = shift[color](testSqr);
        if (isUnoccupied(testSqr, boardState)) {
          range.push(testSqr)
        }
      }
    }

    //Check diagonals 
    testSqr = shift[color + "Alph"](currentSquare);
    console.log("testSqr================ ", testSqr);
    if (isEnemyOccupied(testSqr, boardState, isWht)) {
      range.push(testSqr)
    }

    testSqr = shift[color + "UnAlph"](currentSquare);
    if (isEnemyOccupied(testSqr, boardState, isWht)) {
      range.push(testSqr)
    }



    return range;

  }

  function getRookRange() {
    getLinearRange("wht");
    getLinearRange("blk");
    getLinearRange("alph");
    getLinearRange("unAlph");
    return range;
  }

  function getBishopRange() {
    getLinearRange("whtAlph");
    getLinearRange("whtUnAlph");
    getLinearRange("blkAlph");
    getLinearRange("blkUnAlph");
    return range;
  }

  function getQueenRange() {
    getLinearRange("wht");
    getLinearRange("blk");
    getLinearRange("alph");
    getLinearRange("unAlph");
    getLinearRange("whtAlph");
    getLinearRange("whtUnAlph");
    getLinearRange("blkAlph");
    getLinearRange("blkUnAlph");
    return range;
  }

  function getKnightRange() {
    function testKnightSquare(testSqr) {
      if (testSqr.length === 2) {
        if (isUnoccupied(testSqr, boardState) || isEnemyOccupied(testSqr, boardState, isWht)) {
          range.push(testSqr);
        }
      }
    }
    let testSqr;
    const shiftDirArr = Object.keys(shift);
    for(let i = 0; i < shiftDirArr.length - 1; i++) {
      testSqr = shift[shiftDirArr[i]](shift[shiftDirArr[i+1]](currentSquare));
      testKnightSquare(testSqr);
    }
    testSqr = shift[shiftDirArr.pop()](shift[shiftDirArr[0]](currentSquare));
    testKnightSquare(testSqr);
    return range;
  }

  function getKingRange() {
    function testKingSquare(testSqr) {
      if (testSqr.length === 2) {
        if (isUnoccupied(testSqr, boardState) || isEnemyOccupied(testSqr, boardState, isWht)) {
          range.push(testSqr);
        }
      }
    }

    Object.keys(shift).forEach(dir => {
      let testSqr = shift[dir](currentSquare);
      testKingSquare(testSqr);
    })
   
    return range;

  }
}

const isUnoccupied = function (sqrName, boardState) {
  const result = boardState[sqrName]?.piece ? false : true;
  console.log(`isUnoccupied(${sqrName}) result = ${result}`);
  return result;
}

const isEnemyOccupied = function(sqrName, boardState, isWht) {
  if (isUnoccupied(sqrName, boardState)) return false;
  const result = boardState[sqrName].piece.isWht !== isWht;
  console.log(`isEnemyOccupied(${sqrName}) result = ${result}`);
  return result;
}

export { getRange, isUnoccupied, isEnemyOccupied };
