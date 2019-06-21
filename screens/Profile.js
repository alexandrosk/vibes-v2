import React from 'react';
import { Text, View} from 'react-native';
import styles from '../styles';
import {connect} from "react-redux";

class Profile extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Text style={styles.text}>{this.props.counter}</Text>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
};
export default connect(mapStateToProps)(Profile)

