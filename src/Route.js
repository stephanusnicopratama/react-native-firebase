import React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";

// import component
import LoginForm from './LoginForm';
import Register from './Register';
import homeDrawer from './app/AppRoute';

const RootNavigator = StackNavigator({
	Login: {
		screen: LoginForm,
		navigationOptions: {
			header: null
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
		screen: homeDrawer,
		navigationOptions: ({ navigation }) => ({
				headerLeft: (
					<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
						<IOSIcon name="ios-menu" size={30} />
					</TouchableOpacity>
				),
				headerStyle: { paddingRight: 10, paddingLeft: 10 }
			})
	}
});

export default RootNavigator;

{/* <IOSIcon name="ios-menu" size={30} /> */}
