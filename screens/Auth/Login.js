import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../../styles';

export default class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput value='' onChangeText={input => console.log(input)} placeholder='Email'/>
            </View>
        );
    }
}

