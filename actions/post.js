import firebase from "firebase";
import db from '../config/firebase';
import {getUser} from "./user";

export const updateDescription = (input) => {
    return {type: 'UPDATE_DESCRIPTION', payload: input}
};

export const uploadPost = () => {
    return async (dispatch, getState) => {
        try {
            const {post, user} = getState();
            const postData = {
                postPhoto: 'https://firebasestorage.googleapis.com/v0/b/vibes-936f2.appspot.com/o/11342_1514657652171064_2933594812106856275_n.jpg?alt=media&token=e3ca247f-7ea1-4671-9015-94daecc1756d',
                description: post.description,
                uid: user.uid,
                photo: user.photo,
                username: user.username,
            };
            const postRef = await db.collection('posts').doc();
            //upload.id = postRef.id;
            postRef.set(postData);

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
