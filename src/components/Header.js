import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
    <View style={styles.head}>
        <Text style={styles.txtTitle}>Calculadora 1.0</Text>
    </View>
);

const styles = StyleSheet.create ({
    head: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center'
    },
    txtTitle: {
        fontSize: 25,
        color: '#fff'
    }
});
