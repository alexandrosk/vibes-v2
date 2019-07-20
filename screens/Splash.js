import React from 'react';
import {StatusBar, Text, View,ActivityIndicator} from 'react-native';
import styles from '../styles';
import {connect} from "react-redux";
import {getUser} from "../actions/user";
import {bindActionCreators} from 'redux';
import firebase from 'firebase';
import {theme} from '../constants';


class Splash extends React.Component {
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.getUser(user.uid);
                if (this.props.user){
                    this.props.navigation.navigate('Home');
                }
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
            <View style={[styles.containerFlex,styles.Horizontal]}>
                <StatusBar barStyle="light-content" />
                <Text style={[styles.text,styles.Horizontal]}>Almost there...</Text>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUser,
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Splash)
