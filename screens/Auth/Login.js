import React from 'react';
import { KeyboardAvoidingView} from 'react-native';
import { Button, Block, Input, Text } from '../../components';
import {theme} from '../../constants';
import styles from '../../styles';

import { FontAwesome } from '@expo/vector-icons';
import UniverseIcon from '../../icons/universe';

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
        <KeyboardAvoidingView style={styles.login} behavior="padding">
            <Block padding={[0, theme.sizes.base * 2]}>
                <Text h1 bold>Login to the <UniverseIcon/></Text>
                <Block middle>
                    <Input
                        label="Email"
                        style={[styles.input]}
                        value={this.props.user.email}
                        onChangeText={input => this.props.updateEmail(input)}
                    />
                    <Input
                        secure
                        label="Password"
                        style={[styles.input]}
                        value={this.props.user.password}
                        onChangeText={input => this.props.updatePassword(input)}
                    />
                    <Button gradient onPress={() => this.login()}>
                        <Text bold white center>LOG IN</Text>
                    </Button>
                    <Block middle flex={0.5} >
                        <Button shadow onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text black bold center>
                                SIGN UP
                            </Text>
                        </Button>
                        <Text style={styles.orButton}>
                            OR
                        </Text>
                        <FontAwesome.Button style={styles.facebookButton} name="facebook" backgroundColor="#4267b2" onPress={() => this.props.facebookLogin()}>
                            Continue with Facebook
                        </FontAwesome.Button>
                    </Block>
                </Block>
            </Block>
            </KeyboardAvoidingView>
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
