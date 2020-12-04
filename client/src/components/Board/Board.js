import React from "react";

function Board(props) {
  const { view, mode, positionHistory } = props;
  return (
    <>
    {view === "wht" && (
      <>
      </>
    )}

    {view === "blk" && (
      <>
      </>
    )}
    </>
  )
}

export default Board