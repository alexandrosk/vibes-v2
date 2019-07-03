import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../styles';
import {updateEmail, updatePassword, login, facebookLogin} from "../../actions/user";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import firebase from 'firebase';

class Login extends React.Component {
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.props.navigation.navigate('Home');
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
                <Text style={styles.text}>Login</Text>
                <TextInput style={styles.textInput} placeholderTextColor="#D7DEDC"
                           value={this.props.user.email}
                           onChangeText={input => this.props.updateEmail(input)}
                           placeholder='Email'/>
                <TextInput style={styles.textInput} placeholderTextColor="#D7DEDC"
                           value={this.props.user.password}
                           onChangeText={input => this.props.updatePassword(input)}
                           secureTextEntry={true}
                           placeholder='Password'/>
                <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                    <Text style={styles.text}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.facebookLogin()}>
                    <Text style={styles.text}>FACEBOOK LOGIN</Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                    OR
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.text}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateEmail,
        updatePassword,
        login,
        facebookLogin
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)
