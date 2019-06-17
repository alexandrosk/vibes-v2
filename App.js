import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <TabNavigator/>
        </Provider>
    );
  }
}
