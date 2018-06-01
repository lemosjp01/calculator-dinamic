import React from 'react';
import { View, TextInput } from 'react-native';

export default props => (
    <View>
        <TextInput 
        placeholder='Resultado' 
        style={{ fontSize: 30, height: 100 }}
        editable={false}
        value={props.resultado}
        />
    </View>
);
