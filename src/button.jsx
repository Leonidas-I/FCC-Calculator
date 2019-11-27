import React from 'react';

class Button extends React.Component {
  render() {
    {/*declare multiple varible in 1 line use ',' between variable and use ';' when all declared*/}
    let clearStyle = {      
          backgroundColor: 'lime',
        },
        deleteStyle = {
          backgroundColor: 'tan',
          height: '75px',
          width:'150px'
        },
        operatorStyle = {
          backgroundColor: 'grey'
        },
        equalStyle = {
          backgroundColor: 'royalblue'
        },
        zeroStyle = {
          backgroundColor: 'pink',
          height: '75px',
          width:'150px'
        };
    
    return (
      <div>
        <button id='clear'    value='AC'  onClick={this.props.init}  style={clearStyle}>AC</button>
        {/*ref from w3schools symbol keyword*/}
        <button id='delete'   value='Del' onClick={this.props.del} style={deleteStyle}>&#8592;</button>
        <button id='divide'   value='/'   onClick={this.props.operators}  style={operatorStyle}>/</button>
        
        <button id='seven'    value='7'   onClick={this.props.numbers}>7</button>
        <button id='eight'    value='8'   onClick={this.props.numbers}>8</button>
        <button id='nine'     value='9'   onClick={this.props.numbers}>9</button>
        <button id='multiply' value='x'   onClick={this.props.operators}  style={operatorStyle}>x</button>
        
        <button id='four'     value='4'   onClick={this.props.numbers}>4</button>
        <button id='five'     value='5'   onClick={this.props.numbers}>5</button>
        <button id='six'      value='6'   onClick={this.props.numbers}>6</button>
        <button id='subtract' value='-'   onClick={this.props.operators}  style={operatorStyle}>-</button>
        
        <button id='one'      value='1'   onClick={this.props.numbers}>1</button>
        <button id='two'      value='2'   onClick={this.props.numbers}>2</button>
        <button id='three'    value='3'   onClick={this.props.numbers}>3</button>
        <button id='add'      value='+'   onClick={this.props.operators}  style={operatorStyle}>+</button>
        
        <button id='zero'     value='0'   onClick={this.props.numbers}   style={zeroStyle}>0</button>
        <button id='decimal'  value='.'   onClick={this.props.decimal}>.</button>
        <button id='equals'    value='='  onClick={this.props.equals}   style={equalStyle}>=</button>
      </div>
    );
  }
}
export default Button;