import React from 'react';
import {Button, Block, Text} from '../components';
import {Image} from 'react-native';
import {theme} from '../constants';
import styles from '../styles';

import {SafeAreaView} from 'react-navigation';

import {connect} from "react-redux";
import firebase from "firebase";

class Profile extends React.Component {

    render() {
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.marginHeader}>
                    <Text bold h1>Profile</Text>
                </Block>
                <Block flex={false} middle>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: this.props.user.photo}}
                    />
                    <Text style={styles.text}>{this.props.user.email}</Text>
                    <Text style={styles.text}>{this.props.user.username}</Text>
                    <Text style={styles.text}>{this.props.user.bio}</Text>
                    <Button shadow title="Logout" onPress={() => firebase.auth().signOut()}>
                        <Text black bold center>
                            SIGN OUT
                        </Text>
                    </Button>
                </Block>
            </Block>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        user: state.user
    }
};
export default connect(mapStateToProps)(Profile)

