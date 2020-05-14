import React from "react";
import { Button } from "./Numpad.css";

export const Numpad = props => {
  return (
    <div>
      <Button AC onClick={props.init}>
        AC
      </Button>
      <Button DEL onClick={props.del}>
        DEL
      </Button>
      <Button operators value="/" onClick={props.operators}>
        /
      </Button>
      <Button value="7" onClick={props.numbers}>
        7
      </Button>
      <Button value="8" onClick={props.numbers}>
        8
      </Button>
      <Button value="9" onClick={props.numbers}>
        9
      </Button>
      <Button operators value="*" onClick={props.operators}>
        x
      </Button>
      <Button value="4" onClick={props.numbers}>
        4
      </Button>
      <Button value="5" onClick={props.numbers}>
        5
      </Button>
      <Button value="6" onClick={props.numbers}>
        6
      </Button>
      <Button operators value="-" onClick={props.operators}>
        -
      </Button>
      <Button value="1" onClick={props.numbers}>
        1
      </Button>
      <Button value="2" onClick={props.numbers}>
        2
      </Button>
      <Button value="3" onClick={props.numbers}>
        3
      </Button>
      <Button operators value="+" onClick={props.operators}>
        +
      </Button>
      <Button zero value="0" onClick={props.numbers}>
        0
      </Button>
      <Button value="." onClick={props.decimal}>
        .
      </Button>
      <Button equal value="=" onClick={props.equal}>
        =
      </Button>
    </div>
  );
};
