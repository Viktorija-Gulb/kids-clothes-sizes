import React, {Component} from 'react';
import './calculator.scss'

class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      heightInput: '',
      weightInput: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  handleHeightChange(event) {
    this.setState({
      heightInput: event.target.value
    });
  }

  handleWeightChange(event) {
    this.setState({
      weightInput: event.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({
      weightInput: "",
      heightInput: "",
      submit:
        `Įvestas ūgis yra 
        ${this.state.heightInput} cm, svoris
        ${this.state.weightInput} kg.`,
    });
  }

  render(){
    const { heightInput, weightInput } = this.state;
    return(
      <div className="calc-wrapper" >
        <h1>Calculator</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="" className="field__label">Ūgis: </label>
            <input className="field__input" 
                type="number" 
                placeholder="Įveskite vaiko ūgį"
                value={heightInput}
                onChange={this.handleHeightChange}
            />
          </div>
          <div className="field">
            <label htmlFor="" className="field__label">Svoris: </label>
            <input className="field__input" 
                type="number" 
                placeholder="Įveskite vaiko svorį"
                value={weightInput}
                onChange={this.handleWeightChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p className="submit-result">{this.state.submit}</p>
        <p className="calc-result">{this.state.message}</p>
      </div>
    )
  }
}

export default Calculator;