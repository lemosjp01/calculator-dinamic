import React, { Component } from 'react'
import { View } from 'react-native'
import { Head, Result, Display } from './components';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = { num1: '', num2: '', operation: 'subtracao', resultado: '' };
        this.calculate = this.calculate.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.updateOperation = this.updateOperation.bind(this);
    }

    calculate() {
        let resultado = 0;

        switch (this.state.operation) {
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;

            case 'sutracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;

            default:
                resultado = 0;
        }

        this.setState({ resultado: resultado.toString() });
    }

    updateOperation(operation) {
        this.setState({ operation });
    }

    updateValue(campName, number) {
        const obj = {};
        obj[campName] = number;

        this.setState(obj);
    }

    render() {
        return (
            <View>
                <Head />
                <Result resultado={this.state.resultado} />
                <Display
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operation={this.state.operation}
                    calculate={this.calculate}
                    updateOperation={this.updateOperation}
                    updateValue={this.updateValue}
                />
            </View>
        );
    }
};
