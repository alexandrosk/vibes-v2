import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../styles';

import {updateEmail, updatePassword, updateUsername, updateBio} from "../../actions/user";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

class SignUp extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholderTextColor="#D7DEDC"
                           value={this.props.user.email}
                           style={styles.textInput}
                           onChangeText={input => this.props.updateEmail(input)}
                           placeholder='Email'/>
                <TextInput placeholderTextColor="#D7DEDC"
                           value={this.props.user.password}
                           style={styles.textInput}
                           secureTextEntry={true}
                           onChangeText={input => this.props.updatePassword(input)}
                           placeholder='Password'/>
                <TextInput placeholderTextColor="#D7DEDC"
                           value={this.props.user.username}
                           style={styles.textInput}
                           secureTextEntry={true}
                           onChangeText={input => this.props.updateUsername(input)}
                           placeholder='Username (unique)'/>
                <TextInput placeholderTextColor="#D7DEDC"
                           value={this.props.user.bio}
                           style={styles.textInput}
                           secureTextEntry={true}
                           onChangeText={input => this.props.updateBio(input)}
                           placeholder='Bio'/>
                <TouchableOpacity style={styles.button} onPress={() => console.log(this.props.user)}>
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
        updateUsername,
        updateBio,
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
