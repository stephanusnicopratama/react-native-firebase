import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

// import component
import LoginForm from './LoginForm';
import Register from './Register';
import Home from './Home';

export const RootNavigator = StackNavigator({
	Login: {
		screen: LoginForm,
		navigationOptions: {
      header: null,
		}
	},
	Register: {
		screen: Register,
    path: 'register',
		navigationOptions: {
			headerTitle: 'Register'
		}
	},
	Home: {
		screen: Home,
		navigationOptions: {
			header: null,
		}
	}
});



export default RootNavigator;
