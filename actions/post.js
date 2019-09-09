import firebase from "firebase";
import db from '../config/firebase';
import {getUser} from "./user";
import uuid from "uuid";


export const updateDescription = (input) => {
    return {type: 'UPDATE_DESCRIPTION', payload: input}
};

export const likePost = (post) => {
    return (dispatch, getState) => {
        const {uid, username, photo} = getState().user;
        try {
           db.collection('posts').doc(post.id).update({
               likes: firebase.firestore.FieldValue.arrayUnion(uid)
           })
           db.collection('activity').doc().set({
               postId : post.id,
               postDescription : post.description,
               likerId : uid,
               likerPhoto: photo,
               likerName: username,
               uid: post.uid,
               date: new Date().getTime(),
               type : 'LIKE'
           })
        } catch (e) {
            console.error(e);
        }
    }
}

export const unlikePost = (post) => {
    return (dispatch, getState) => {
        const {uid} = getState().user;
        try {
           db.collection('posts').doc(post.id).update({
               likes: firebase.firestore.FieldValue.arrayRemove(uid)
           })
           //prepei auto na mpei kai se state etsi oste na min xalame calls
        } catch (e) {
            console.error(e);
        }
    }
}

export const uploadPost = () => {
    return async (dispatch, getState) => {
        try {
            const {post, user} = getState();
            const id = uuid.v4();
            const postData = {
                id: id,
                postPhoto: 'https://firebasestorage.googleapis.com/v0/b/vibes-936f2.appspot.com/o/11342_1514657652171064_2933594812106856275_n.jpg?alt=media&token=e3ca247f-7ea1-4671-9015-94daecc1756d',
                description: post.description,
                uid: user.uid,
                photo: user.photo,
                username: user.username,
                likes: ''
            };
            db.collection('posts').doc(id).set(postData);
            //upload.id = postRef.id;

        } catch (e) {
            alert(e);
        }
    }
};


export const getHomeFeed = () => {
    return async (dispatch, getState) => {
        try {
            const posts = await db.collection('posts').get();

            let array = [];
            posts.forEach((post)=>{
                array.push(post.data())
            });
            dispatch({type: 'GET_POSTS', payload: array})
        } catch (e) {
            alert(e)
        }
    }
};
