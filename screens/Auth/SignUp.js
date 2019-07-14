import React from 'react';
import { KeyboardAvoidingView} from 'react-native';
import { Button, Block, Input, Text } from '../../components';
import {theme} from '../../constants';
import styles from '../../styles';
import UniverseIcon from '../../icons/universe';

import {updateEmail, updatePassword, updateUsername, updateBio, signUp} from "../../actions/user";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

class SignUp extends React.Component {
    state = {
        email: null,
        username: null,
        password: null,
        errors: [],
        loading: false,
    };

    signUp = () => {
        this.props.signUp();
        this.props.navigation.navigate('home');
    };

    render() {
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
        return (
            <KeyboardAvoidingView style={styles.login} behavior="padding">
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Text h1 bold>Sign Up to the <UniverseIcon/></Text>
                    <Block middle>
                        <Input
                            email
                            label="Email"
                            style={[styles.input, hasErrors('email')]}
                            value={this.props.user.email}
                            onChangeText={input => this.props.updateEmail(input)}
                        />
                        <Input
                            label="Username"
                            style={[styles.input, hasErrors('username')]}
                            value={this.props.user.email}
                            onChangeText={input => this.props.updateUsername(input)}
                        />
                        <Input
                            secure
                            label="Password"
                            error={hasErrors('password')}
                            style={[styles.input, hasErrors('password')]}
                            value={this.props.user.password}
                            onChangeText={input => this.props.updatePassword(input)}
                        />
                        <Input
                            label="Bio"
                            style={[styles.input, hasErrors('bio')]}
                            value={this.props.user.bio}
                            onChangeText={input => this.props.updateBio(input)}
                        />
                        <Button gradient onPress={() => this.signUp()}>
                            {loading ?
                                <ActivityIndicator size="small" color="white" /> :
                                <Text bold white center>SIGN UP</Text>
                            }
                        </Button>
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
        updateUsername,
        updateBio,
        signUp
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
