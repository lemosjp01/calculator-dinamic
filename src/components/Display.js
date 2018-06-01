import React from 'react';
import { View } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';

const Display = props => (
    <View>
        <Input
            num1={props.num1}
            num2={props.num2}
            updateValue={props.updateValue}
        />
        <Operation
            operation={props.operation}
            updateOperation={props.updateOperation}
        />
        <Command action={props.calculate} />
    </View>
);

export { Display };
