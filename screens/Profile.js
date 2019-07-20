import React from 'react';
import {Button, Block, Text} from '../components';
import {Image,View} from 'react-native';
import {theme} from '../constants';
import styles from '../styles';

import {SafeAreaView} from 'react-navigation';

import {connect} from "react-redux";
import firebase from "firebase";

class Profile extends React.Component {

    render() {
        return (
            <Block style={styles.container}>
                <View style={{ flexDirection: 'row' }}>

                    {/**User photo takes 1/3rd of view horizontally **/}
                    <View
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Image
                            style={{ width: 60, height: 60, borderRadius: 30 }}
                            source={{uri: this.props.user.photo}}
                        />
                    </View>

                    {/**User Stats take 2/3rd of view horizontally **/}
                    <View style={{ flex: 3 }}>

                        {/** Stats **/}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'flex-end'
                            }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text>20</Text>
                                <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>205</Text>
                                <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>167</Text>
                                <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                            </View>
                        </View>

                        {/**Edit profile and Settings Buttons **/}
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>

                            <View
                                style={{ flexDirection: 'row' }}>

                                {/** Edit profile takes up 3/4th **/}
                                <Button bordered
                                        style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text center black>Edit Profile</Text></Button>


                                {/** Settings takes up  1/4th place **/}
                                <Button bordered dark style={{
                                    flex: 1,
                                    height: 30,
                                    marginRight: 10, marginLeft: 5,
                                    justifyContent: 'center'
                                }}>
                                    <Text center black>+</Text>
                                   </Button>
                            </View>
                        </View>{/**End edit profile**/}
                    </View>
                </View>

                <View style={{ paddingBottom: 10 }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>@{this.props.user.username}</Text>
                        <Text>{this.props.user.bio}</Text>
                        <Text>www.unsureprogrammer.com</Text>
                        <Button shadow title="Logout" onPress={() => firebase.auth().signOut()}>
                            <Text black bold center>
                                SIGN OUT
                            </Text>
                        </Button>
                    </View>
                </View>
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

