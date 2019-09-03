import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

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
        image: null,
        isKeyboardFocus: false
    };

    keyboardFocus = () => {
        this.setState({isKeyboardFocus: true});
    };

    uploadPost = () => {
        Keyboard.dismiss();
        this.props.uploadPost();
        this.props.updateDescription('');
        this.props.navigation.navigate('Home');
    };
    closeKeyboard = () => {
        Keyboard.dismiss();
        this.setState({isKeyboardFocus: false});
    };

    async componentDidMount() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }


    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.login} behavior="padding">
                <Text h1 bold style={{paddingVertical: theme.sizes.base * 3}}>Thoughts to pixels</Text>
                <Block middle style={{marginHorizontal:theme.sizes.horizontal}}>
                    {this.renderCloseKeyboard()}
                    <Input
                        multiline = {true}
                        placeholder="Type here//"
                        placeholderTextColor={theme.colors.white}
                        style={[styles.textarea]}
                        value={this.props.post.description}
                        onFocus={() => this.keyboardFocus()}
                        onChangeText={input => this.props.updateDescription(input)}
                    />
                    <Button bordered dark
                        title="Add an Image"
                        onPress={this._pickImage}
                    />
                    {this.state.image &&
                    <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}

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
                <TouchableOpacity onPress={() => this.closeKeyboard()}>
                    <Text>Dismiss</Text>
                </TouchableOpacity>
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

