const rankString = "abcdefgh";
function incrementRank(rank) {
  const index = rankString.indexOf(rank);
  if (index === 7) return "";
  return rankString[index + 1];
}

function decrementRank(rank) {
  const index = rankString.indexOf(rank);
  if (index === 0) return "";
  return rankString[index - 1];
}

const shift = {
  wht: function(sqrName) {
    return sqrName.length < 2 ? "" : `${sqrName[0]}${parseInt(sqrName[1]) === 8 ? "" : parseInt(sqrName[1]) + 1}`
  },
  blk: function(sqrName) {
    return sqrName.length < 2 ? "" : `${sqrName[0]}${parseInt(sqrName[1]) === 1 ? "" : parseInt(sqrName[1]) - 1}`
  },
  alph: function(sqrName) {
    return `${incrementRank(sqrName[0])}${sqrName[1]}`
  },
  unAlph: function(sqrName) {
    return `${decrementRank(sqrName[0])}${sqrName[1]}`
  },
  whtAlph: function(sqrName) {
    return `${this.wht(this.alph(sqrName))}`
  },
  whtUnAlph: function(sqrName) {
    return `${this.wht(this.unAlph(sqrName))}`
  },
  blkAlph: function(sqrName) {
    return `${this.blk(this.alph(sqrName))}`
  },
  blkUnAlph: function(sqrName) {
    return `${this.blk(this.unAlph(sqrName))}`
  }
}

export default shift; 