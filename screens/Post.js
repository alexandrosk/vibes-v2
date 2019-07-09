import React from 'react';
import {Text, TextInput, View, Image, TouchableOpacity, Button} from 'react-native';
import styles from '../styles';
import {updateDescription,uploadPost} from "../actions/post";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Post extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Post</Text>
                <TextInput placeholderTextColor="#D7DEDC"
                           value={this.props.post.description}
                           style={styles.textInput}
                           onChangeText={input => this.props.updateDescription(input)}
                           placeholder='Share your vibes..'/>
                           <Image style={styles.postPhoto} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/vibes-936f2.appspot.com/o/11342_1514657652171064_2933594812106856275_n.jpg?alt=media&token=e3ca247f-7ea1-4671-9015-94daecc1756d'}}/>
                <TouchableOpacity  style={styles.button} onPress={() => this.props.uploadPost()}>
                    <Text style={styles.text}>Share</Text>
                </TouchableOpacity>
            </View>
        );
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

