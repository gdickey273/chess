import React, { useState } from "react";
import Board from "../../components/Board";

function Game(props) {
  const newGameBoardState = {
    a1: {
      piece: {
        type: "R",
        isWht: true
      }
    },
    b1: {
      piece: {
        type: "N",
        isWht: true
      }
    },
    c1: {
      piece: {
        type: "B",
        isWht: true
      }
    },
    d1: {
      piece: {
        type: "Q",
        isWht: true
      }
    },
    e1: {
      piece: {
        type: "K",
        isWht: true
      }
    },
    f1: {
      piece: {
        type: "B",
        isWht: true
      }
    },
    g1: {
      piece: {
        type: "N",
        isWht: true
      }
    },
    h1: {
      piece: {
        type: "R",
        isWht: true
      }
    },
    a2: {
      piece: {
        type: "P",
        isWht: true
      }
    },
    b2: {
      piece: {
        type: "P",
        isWht: true
      }
    },
    c2: {
      piece: {
        type: "P",
        isWht: true
      }
    },
    d2: {
      piece: {
        type: "P",
        isWht: true
      }
    },
    e2: {
      piece: {
        type: "P",
        isWht: true
      }
    },
    f2: {
      piece: {
        type: "P",
        isWht: true
      }
    },
    g2: {
      piece: {
        type: "P",
        isWht: true
      }
    },
    h2: {
      piece: {
        type: "P",
        isWht: true
      }
    },
    a7: {
      piece: {
        type: "P",
        isWht: false
      }
    },
    b7: {
      piece: {
        type: "P",
        isWht: false
      }
    },
    c7: {
      piece: {
        type: "P",
        isWht: false
      }
    },
    d7: {
      piece: {
        type: "P",
        isWht: false
      }
    },
    e7: {
      piece: {
        type: "P",
        isWht: false
      }
    },
    f7: {
      piece: {
        type: "P",
        isWht: false
      }
    },
    g7: {
      piece: {
        type: "P",
        isWht: false
      }
    },
    h7: {
      piece: {
        type: "P",
        isWht: false
      }
    },
    a8: {
      piece: {
        type: "R",
        isWht: false
      }
    },
    b8: {
      piece: {
        type: "N",
        isWht: false
      }
    },
    c8: {
      piece: {
        type: "B",
        isWht: false
      }
    },
    d8: {
      piece: {
        type: "Q",
        isWht: false
      }
    },
    e8: {
      piece: {
        type: "K",
        isWht: false
      }
    },
    f8: {
      piece: {
        type: "B",
        isWht: false
      }
    },
    g8: {
      piece: {
        type: "N",
        isWht: false
      }
    },
    h8: {
      piece: {
        type: "R",
        isWht: false
      }
    }
  }
  
  const [boardState, setBoardState] = useState(newGameBoardState);
  return (
    <>
    {boardState.a1 && 
        <Board boardState={boardState} view={"wht"}/>
    }
    </>
    )
}


export default Game