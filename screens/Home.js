import React from 'react';
import { Text, View, Button} from 'react-native';
import styles from '../styles';
import { StatusBar } from 'react-native';
export default class Home extends React.Component {
    state = {
        count: 10
    };

    add = () => {
        console.log("adding");
        let num = this.state.count + 1;
        this.setState({count: num});
    };
    minus = () => {
        console.log("substracting");
        let num = this.state.count - 1;
        this.setState({count: num});
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Text style={styles.text}>How many apps are we going to build? {this.state.count}</Text>
                <Button title="Add" onPress={() => this.add()}/>
                <Button title="Remove" onPress={() => this.minus()}/>
            </View>
        );
    }
}

