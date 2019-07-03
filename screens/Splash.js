import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import firebase from 'firebase';

class Splash extends React.Component {
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('Login');
            }
        })
    };

    login = () => {
        if (this.props.user.email) {
            this.props.login();
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Loading</Text>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Splash)
