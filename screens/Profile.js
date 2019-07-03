import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from '../styles';
import {connect} from "react-redux";
import firebase from "firebase";

class Profile extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Image
                    style={{width:50, height:50}}
                    source={{uri: this.props.user.photo}}
                    />
                <Text style={styles.text}>{this.props.user.email}</Text>
                <Text style={styles.text}>{this.props.user.username}</Text>
                <Text style={styles.text}>{this.props.user.bio}</Text>
                <Button title="Logout" onPress={() => firebase.auth().signOut()}/>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        counter : state.counter,
        user: state.user
    }
};
export default connect(mapStateToProps)(Profile)

