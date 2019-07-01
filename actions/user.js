import firebase from "firebase";

export const updateEmail = (input) => {
    return { type: 'UPDATE_EMAIL', payload: input}
};
export const updatePassword = (input) => {
    return { type: 'UPDATE_PASSWORD', payload: input}
};
export const updateUsername = (input) => {
    return { type: 'UPDATE_USERNAME', payload: input}
};
export const updateBio = (input) => {
    return { type: 'UPDATE_BIO', payload: input}
};
export const login = (email, password) => {
   return async (dispatch, getState) => {
       try {
           const {email, password } = getState().user;
           const response = await firebase.auth().signInWithEmailAndPassword(email, password);
           
           //xriazete to async gia to await
       } catch (e) {
           alert(e);
       }
   }
};
export const signup = () => {
    return () => {
        firebase.auth().createUserWithEmailAndPassword(this.props.user.email, this.props.user.password).catch(function(error) {
            alert(error);
        });
    }
};
