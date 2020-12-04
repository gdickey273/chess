import React from "react";
import "./style.css";
import Square from "../Square";
import { Container, Row, Col } from "../Grid";


function Board(props) {
  const { view, mode, boardState } = props;
  return (
    <>

      {view === "wht" && (
        <>
          <Container>
            <Row>
              <div className="labelDiv">
                <h3 className="rankLabel">8</h3>
              </div>
              <Square boardState={boardState} name="a8" sqrIsWht={true} />
              <Square boardState={boardState} name="b8" sqrIsWht={false} />
              <Square boardState={boardState} name="c8" sqrIsWht={true} />
              <Square boardState={boardState} name="d8" sqrIsWht={false} />
              <Square boardState={boardState} name="e8" sqrIsWht={true} />
              <Square boardState={boardState} name="f8" sqrIsWht={false} />
              <Square boardState={boardState} name="g8" sqrIsWht={true} />
              <Square boardState={boardState} name="h8" sqrIsWht={false} />
            </Row>
            <Row>
              <div className="labelDiv">
                <h3 className="rankLabel">7</h3>
              </div>
              <Square boardState={boardState} name="a7" sqrIsWht={false} />
              <Square boardState={boardState} name="b7" sqrIsWht={true} />
              <Square boardState={boardState} name="c7" sqrIsWht={false} />
              <Square boardState={boardState} name="d7" sqrIsWht={true} />
              <Square boardState={boardState} name="e7" sqrIsWht={false} />
              <Square boardState={boardState} name="f7" sqrIsWht={true} />
              <Square boardState={boardState} name="g7" sqrIsWht={false} />
              <Square boardState={boardState} name="h7" sqrIsWht={true} />
            </Row>
            <Row>
              <div className="labelDiv">
                <h3 className="rankLabel">6</h3>
              </div>
              <Square boardState={boardState} name="a6" sqrIsWht={true} />
              <Square boardState={boardState} name="b6" sqrIsWht={false} />
              <Square boardState={boardState} name="c6" sqrIsWht={true} />
              <Square boardState={boardState} name="d6" sqrIsWht={false} />
              <Square boardState={boardState} name="e6" sqrIsWht={true} />
              <Square boardState={boardState} name="f6" sqrIsWht={false} />
              <Square boardState={boardState} name="g6" sqrIsWht={true} />
              <Square boardState={boardState} name="h6" sqrIsWht={false} />
            </Row>
            <Row>
              <div className="labelDiv">
                <h3 className="rankLabel">5</h3>
              </div>
              <Square boardState={boardState} name="a5" sqrIsWht={false} />
              <Square boardState={boardState} name="b5" sqrIsWht={true} />
              <Square boardState={boardState} name="c5" sqrIsWht={false} />
              <Square boardState={boardState} name="d5" sqrIsWht={true} />
              <Square boardState={boardState} name="e5" sqrIsWht={false} />
              <Square boardState={boardState} name="f5" sqrIsWht={true} />
              <Square boardState={boardState} name="g5" sqrIsWht={false} />
              <Square boardState={boardState} name="h5" sqrIsWht={true} />
            </Row>
            <Row>
              <div className="labelDiv">
                <h3 className="rankLabel">4</h3>
              </div>
              <Square boardState={boardState} name="a4" sqrIsWht={true} />
              <Square boardState={boardState} name="b4" sqrIsWht={false} />
              <Square boardState={boardState} name="c4" sqrIsWht={true} />
              <Square boardState={boardState} name="d4" sqrIsWht={false} />
              <Square boardState={boardState} name="e4" sqrIsWht={true} />
              <Square boardState={boardState} name="f4" sqrIsWht={false} />
              <Square boardState={boardState} name="g4" sqrIsWht={true} />
              <Square boardState={boardState} name="h4" sqrIsWht={false} />
            </Row>
            <Row>
              <div className="labelDiv">
                <h3 className="rankLabel">3</h3>
              </div>
              <Square boardState={boardState} name="a3" sqrIsWht={false} />
              <Square boardState={boardState} name="b3" sqrIsWht={true} />
              <Square boardState={boardState} name="c3" sqrIsWht={false} />
              <Square boardState={boardState} name="d3" sqrIsWht={true} />
              <Square boardState={boardState} name="e3" sqrIsWht={false} />
              <Square boardState={boardState} name="f3" sqrIsWht={true} />
              <Square boardState={boardState} name="g3" sqrIsWht={false} />
              <Square boardState={boardState} name="h3" sqrIsWht={true} />
            </Row>
            <Row>
              <div className="labelDiv">
                <h3 className="rankLabel">2</h3>
              </div>
              <Square boardState={boardState} name="a2" sqrIsWht={true} />
              <Square boardState={boardState} name="b2" sqrIsWht={false} />
              <Square boardState={boardState} name="c2" sqrIsWht={true} />
              <Square boardState={boardState} name="d2" sqrIsWht={false} />
              <Square boardState={boardState} name="e2" sqrIsWht={true} />
              <Square boardState={boardState} name="f2" sqrIsWht={false} />
              <Square boardState={boardState} name="g2" sqrIsWht={true} />
              <Square boardState={boardState} name="h2" sqrIsWht={false} />
            </Row>
            <Row>
              <div className="labelDiv">
                <h3 className="rankLabel">1</h3>
              </div>
              <Col>
                <Square boardState={boardState} name="a1" sqrIsWht={false} />
                <h3 className="fileLabel">a</h3>
              </Col>
              <Col>
                <Square boardState={boardState} name="b1" sqrIsWht={true} />
                <h3 className="fileLabel">b</h3>
              </Col>
              <Col>
                <Square boardState={boardState} name="c1" sqrIsWht={false} />
                <h3 className="fileLabel">c</h3>
              </Col>
              <Col>
                <Square boardState={boardState} name="d1" sqrIsWht={true} />
                <h3 className="fileLabel">d</h3>
              </Col>
              <Col>
                <Square boardState={boardState} name="e1" sqrIsWht={false} />
                <h3 className="fileLabel">e</h3>
              </Col>
              <Col>
                <Square boardState={boardState} name="f1" sqrIsWht={true} />
                <h3 className="fileLabel">f</h3>
              </Col>
              <Col>
                <Square boardState={boardState} name="g1" sqrIsWht={false} />
                <h3 className="fileLabel">g</h3>
              </Col>
              <Col>
                <Square boardState={boardState} name="h1" sqrIsWht={true} />
                <h3 className="fileLabel">h</h3>
              </Col>
            </Row>
          </Container>
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