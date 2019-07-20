import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from '../styles';

import { KeyboardAvoidingView,Keyboard} from 'react-native';
import { Button, Block, Input, Text } from '../components';
import {theme} from '../constants';
import UniverseIcon from '../icons/universe';

import {updateDescription,uploadPost} from "../actions/post";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Post extends React.Component {
    state = {
        isKeyboardFocus:false
    };

    keyboardFocus = () => {
        this.setState({isKeyboardFocus : true});
    };

    uploadPost = () => {
        Keyboard.dismiss();
        this.props.uploadPost();
    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.login} behavior="padding">
                <Text h1 bold style={{paddingVertical: theme.sizes.base * 3}}>Ready to share? </Text>
                <Block middle style={{marginHorizontal:theme.sizes.horizontal}}>
                    {this.renderCloseKeyboard()}
                    <Input
                        multiline = {true}
                        placeholder="Start typing.."
                        placeholderTextColor={theme.colors.white}
                        style={[styles.textarea]}
                        value={this.props.post.description}
                        onFocus={() => this.keyboardFocus()}
                        onChangeText={input => this.props.updateDescription(input)}
                    />


                    <Button gradient onPress={() => this.uploadPost()}>
                            <Text bold white center>SHARE NOW</Text>
                    </Button>
                </Block>
            </KeyboardAvoidingView>
        );
    }
    renderCloseKeyboard() {
        if (this.state.isKeyboardFocus) {
            return (
                <Block>
                    <Text>
                        Close Keyboard
                    </Text>
                </Block>
            )
        } else {
            return null;
        }
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateDescription,
        uploadPost
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        post : state.post,
        user: state.user
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Post)

