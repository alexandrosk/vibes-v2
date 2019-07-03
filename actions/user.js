import firebase from "firebase";
import db from '../config/firebase';

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
