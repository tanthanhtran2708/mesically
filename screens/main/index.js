import React from 'react';
import Home from './home/Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

export default class AppStack extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
}
