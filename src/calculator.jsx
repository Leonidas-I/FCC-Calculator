import React from 'react';
import Button from './button.jsx';


//should overview RegEx \ ? . * +
const isOperators = /[^.0-9]/,
      endByOperators = /[^.0-9]$/;


/*
currentValue: luu gia tri vua nhap (so, chuoi so, dau)
allInput: luu ALL nhung gi da nhap (kieu cong thuc hien ra tren man hinh)
formula: luu ket qua sau khi nhan '=' va de luu ALL ngoai tru dau o cuoi cong thuc (handleOperators)
evaluated: kieu flag xem coi allInput da duoc tinh toan chua
*/

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
      allInput: '',
      formula: '0',
      evaluated: false
    }
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleInit = this.handleInit.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }
  
  handleNumbers(e) {
    if (this.state.evaluated) {
      this.setState({
        currentValue: e.target.value,
        allInput: e.target.value !== '0' ? e.target.value : '',
        evaluated: false
      });
    }
    else {
      this.setState({
        currentValue: 
          isOperators.test(this.state.currentValue) || this.state.currentValue === '0'
            ? e.target.value
            : this.state.currentValue + e.target.value,
        allInput: 
          this.state.currentValue === '0' && e.target.value === '0'
            ? this.state.allInput
            : /([^.0-9]0)$/.test(this.state.allInput)
              ? this.state.allInput.slice(0,-1) + e.target.value
              : this.state.allInput + e.target.value
      });
    }
  }

  handleDecimal() {
    if (this.state.evaluated) {
      this.setState({
        currentValue: '0.',
        allInput: '0.',
        evaluated: false
      });
    }
    else if (
      endByOperators.test(this.state.allInput) ||
      (this.state.currentValue === '0' && this.state.allInput === '')
    ) {
      this.setState({
        currentValue: '0.',
        allInput: this.state.allInput + '0.'
      });
    }
    else if (
      this.state.currentValue.includes('.') || /[^.0-9]?\d+\.\d*$/.test(this.state.allInput)
    ) {
      this.setState({
        currentValue: this.state.currentValue,
        allInput: this.state.allInput
      });
    }
    else {
      this.setState({
        currentValue: this.state.currentValue + '.',
        allInput: this.state.allInput + '.'
      })
    }
  }

  handleOperators(e) {
    this.setState({
      currentValue: e.target.value
    });
    if (this.state.evaluated) {
      this.setState({
        allInput: this.state.formula + e.target.value,
        evaluated: false
      });
    }
    else if (!endByOperators.test(this.state.allInput)) {
      this.setState({
        formula: this.state.allInput,
        allInput: this.state.allInput + e.target.value
      });
    }
    else {
      this.setState({
        allInput: e.target.value === '-'
          ? this.state.allInput + e.target.value
          : this.state.formula + e.target.value
      });
    }
  }

  handleEquals() {
    while (endByOperators.test(this.state.allInput)) {
      this.setState({
        allInput: this.state.allInput.replace(/x/g, '*').slice(0, -1)
      });
    }
    let result = Math.round(100000000000000*eval(this.state.allInput))/100000000000000;
    this.setState({
      currentValue: result.toString(),
      allInput: this.state.allInput + '=' + result,
      formula: result,
      evaluated: true
    });
  }

  handleInit() {
    this.setState({
      currentValue: '0',
      allInput: '',
      formula: '',
      evaluated: false
    });
  }

  handleDel() { /* i code this by my own, try to figure out when i review it */
    if (this.state.evaluated) {
      this.setState({
        currentValue: this.state.currentValue,
        allInput: this.state.allInput
      });
    }
    else {
      this.setState({
        currentValue:
          endByOperators.test(this.state.allInput.slice(0, -1))
            ? this.state.allInput.slice(0, -1).match(/.$/)
            : this.state.allInput.slice(0, -1).match(/[.0-9]+$/),
        allInput: this.state.allInput.slice(0, -1)
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className='calculator'>
          <div className='equationScreen'>
            {this.state.allInput}
          </div>
          <div id='display' className='calScreen'>
            {this.state.currentValue}
          </div>
          <Button numbers={this.handleNumbers}
                  decimal={this.handleDecimal}
                  operators={this.handleOperators}
                  equals={this.handleEquals}
                  init={this.handleInit}
                  del={this.handleDel} />
        </div>
        <footer>Code by Leonidas-I aka Tri Phan</footer>
      </div>
    )
  }
};

export default Calculator;