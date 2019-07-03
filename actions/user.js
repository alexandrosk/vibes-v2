import firebase from "firebase";
import db from '../config/firebase';
import * as Facebook from 'expo-facebook';

export const updateEmail = (input) => {
    return {type: 'UPDATE_EMAIL', payload: input}
};
export const updatePassword = (input) => {
    return {type: 'UPDATE_PASSWORD', payload: input}
};
export const updateUsername = (input) => {
    return {type: 'UPDATE_USERNAME', payload: input}
};
export const updateBio = (input) => {
    return {type: 'UPDATE_BIO', payload: input}
};
export const login = () => {
    return async (dispatch, getState) => {
        try {
            const {email, password} = getState().user;
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(getUser(response.user.uid));
            //dispatch({type: 'LOGIN', payload: response.user})
            //xriazete to async gia to await
        } catch (e) {
            alert(e);
        }
    }
};

export const facebookLogin = () => {
    return async (dispatch) => {
        try {
            const { type, token } = await Facebook.logInWithReadPermissionsAsync(
                '2342795725978053',
                //{ permissions: ['public_profile'] }
            );
            if (type === 'success') {
                // Build Firebase credential with the Facebook access token.
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                // Sign in with credential from the Facebook user.
                const response = await firebase.auth().signInWithCredential(credential);
                const userRef = await db.collection('users').doc(response.user.uid).get();
                if (!userRef.exists){
                    const user = {
                        uid: response.user.uid,
                        email: response.user.email,
                        username: response.user.displayName,
                        bio: '',
                        photo: response.user.photoURL,
                        token: null
                    };
                    const newUser = await db.collection('users').doc(response.user.uid).set(user);
                    dispatch({type: 'LOGIN', payload: newUser.data()});
                } else {
                    dispatch(getUser(response.user.uid))
                }
                /* pos pianei to error??
                catch((error) => {
                    console.log(error);
                });*/
            }
        } catch (e) {
            alert(e);
        }
    }
};


export const getUser = (uid) => {
    return async (dispatch, getState) => {
        try {
            const user = await db.collection('users').doc(uid).get();
            dispatch({type: 'LOGIN', payload: user.data()})
            //xriazete to async gia to await
        } catch (e) {
            alert(e);
        }
    }
};

export const signUp = () => {
    return async (dispatch, getState) => {
        try {
            const {email, password, username, bio} = getState().user;
            firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
                //xriazete to async gia to await
                if (response.user.uid){
                    const user = {
                        uid: response.user.uid,
                        email: email,
                        username: username,
                        bio: bio,
                        photo: '',
                        token: null
                    };
                    db.collection('users').doc(response.user.uid).set(user);
                    dispatch({type: 'LOGIN', payload: user});
                }
            });
        } catch (e) {
            alert(e);
        }
    }
};
