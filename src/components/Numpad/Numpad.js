import React, { Component } from "react";
import { Button } from "./Numpad.css";

export class Numpad extends Component {
  render() {
    return (
      <div>
        <Button AC onClick={this.props.init}>
          AC
        </Button>
        <Button DEL onClick={this.props.del}>
          DEL
        </Button>
        <Button operators value="/" onClick={this.props.operators}>
          /
        </Button>
        <Button value="7" onClick={this.props.numbers}>
          7
        </Button>
        <Button value="8" onClick={this.props.numbers}>
          8
        </Button>
        <Button value="9" onClick={this.props.numbers}>
          9
        </Button>
        <Button operators value="*" onClick={this.props.operators}>
          x
        </Button>
        <Button value="4" onClick={this.props.numbers}>
          4
        </Button>
        <Button value="5" onClick={this.props.numbers}>
          5
        </Button>
        <Button value="6" onClick={this.props.numbers}>
          6
        </Button>
        <Button operators value="-" onClick={this.props.operators}>
          -
        </Button>
        <Button value="1" onClick={this.props.numbers}>
          1
        </Button>
        <Button value="2" onClick={this.props.numbers}>
          2
        </Button>
        <Button value="3" onClick={this.props.numbers}>
          3
        </Button>
        <Button operators value="+" onClick={this.props.operators}>
          +
        </Button>
        <Button zero value="0" onClick={this.props.numbers}>
          0
        </Button>
        <Button value="." onClick={this.props.decimal}>
          .
        </Button>
        <Button equal value="=" onClick={this.props.equal}>
          =
        </Button>
      </div>
    );
  }
}
