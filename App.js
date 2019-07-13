import React from 'react';
import SwitchNavigator from './navigation/SwitchNavigator';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'

import { Block } from './components';

import thunkMiddleware from 'redux-thunk';
import {logger} from "redux-logger";
//import styles from "./styles";
import {StatusBar, View} from "react-native";
import firebase from './config/firebase'
//const middleware = applyMiddleware(thunkMiddleware, logger);
const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middleware);


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" />
            <Block color={"black"}>
                <SwitchNavigator/>
            </Block>
        </Provider>
    );
  }
}
