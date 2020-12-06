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

  function getBoundsByDirection(dir) {
    let bounds = currentSquare;
    let testSqr = shift[dir](currentSquare);

    while (testSqr.length > 1) {

      if (!isUnoccupied(testSqr)) {
        if (isEnemyOccupied(testSqr)) {
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
        if (isUnoccupied(testSqr) || isEnemyOccupied(testSqr)) {
          range.push(testSqr);
        }
      }
    }
    let testSqr;

    testSqr = shift.wht(shift.wht(shift.alph(currentSquare)));
    testKnightSquare(testSqr);

    testSqr = shift.wht(shift.wht(shift.unAlph(currentSquare)));
    testKnightSquare(testSqr);

    testSqr = shift.blk(shift.blk(shift.alph(currentSquare)));
    testKnightSquare(testSqr);

    testSqr = shift.blk(shift.blk(shift.unAlph(currentSquare)));
    testKnightSquare(testSqr);

    testSqr = shift.alph(shift.alph(shift.wht(currentSquare)));
    testKnightSquare(testSqr);

    testSqr = shift.alph(shift.alph(shift.blk(currentSquare)));
    testKnightSquare(testSqr);

    testSqr = shift.unAlph(shift.unAlph(shift.wht(currentSquare)));
    testKnightSquare(testSqr);

    testSqr = shift.unAlph(shift.unAlph(shift.blk(currentSquare)));
    testKnightSquare(testSqr);

    return range;
  }
}

export default getRange;
