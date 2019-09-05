import React, {Component} from 'react';
// import CalcForm from './CalcForm';

class Calculator extends Component {
    state = {
        
            num1: 0,
            num2: 0,
            sum: 0
        
    }

    // sumOf = e => {
    //     console.log('click')
    // }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }


    
    sumOf = e => {
        this.setState({sum: parseInt(this.state.num1) + parseInt(this.state.num2)})
    }
    
    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    // value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                />
                    <span>+</span>
                    <input type="number"
                        name="num2"
                        placeholder="Enter your second number"
                        // value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={this.sumOf}>=</button>
                    <h3>Addition results go here!</h3>
                    <div>{this.state.sum}</div>
                </div>
            </div>
        )
    }
}

export default Calculator;