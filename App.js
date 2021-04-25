import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './screens/main';

import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
