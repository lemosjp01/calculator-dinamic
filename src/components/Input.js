import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Number from './Number';

export default props => (
    <View style={styles.numbers}>
        <Number
        num={props.num1} 
        updateValue={props.updateValue}
        name='num1'
        />
        <Number
        num={props.num2} 
        updateValue={props.updateValue}
        name='num2'
        />
    </View>
);

const styles = StyleSheet.create({
    numbers: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
