import React from 'react';
import { Text, View} from 'react-native';
import styles from '../../styles';

export default class List extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Messages</Text>
            </View>
        );
    }
}

