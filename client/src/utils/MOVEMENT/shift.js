const rankString = "abcdefgh";
function incrementRank(rank) {
  
}

function decrementRank(rank) {
  return rankString[rankString.indexOf(rank) - 1];
}
const shift = {
  incrementRank: function(rank) {
    return rankString[rankString.indexOf(rank) + 1];
  },
  decrementRank: function(rank) {
    return rankString[rankString.indexOf(rank) + 1];
  },
  wht: function(sqrName) {
    return `${sqrName[0]}${parseInt(sqrName[1]) + 1}`
  },
  blk: function(sqrName) {
    return `${sqrName[0]}${parseInt(sqrName[1]) - 1}`
  },
  alph: function(sqrName) {
    return `${this.incrementRank(sqrName[0])}${sqrName[1]}`
  },
  unAlph: function(sqrName) {
    return `${this.decrementRank(sqrName[0])}${sqrName[1]}`
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