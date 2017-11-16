import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import component
import Jadwal from './jadwal/Jadwal';
import User from './user/User';
import Home from './home/Home';

const logout = ({ navigation }) => (
	AsyncStorage.clear(), navigation.navigate('Login')
);

const homeDrawer = DrawerNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			drawerLabel: 'Home',
			drawerIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-home' : 'ios-home-outline'}
					size={20}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	Jadwal: {
		screen: Jadwal,
		navigationOptions: {
			drawerLabel: 'Schedule',
			drawerIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
					size={20}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	User: {
		screen: User,
		navigationOptions: {
			drawerLabel: 'Users',
			drawerIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-person' : 'ios-person-outline'}
					size={20}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	Logout: {
		screen: logout,
		navigationOptions: {
			drawerLabel: 'Logout',
			drawerIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-exit' : 'ios-exit-outline'}
					size={20}
					style={{ color: tintColor }}
				/>
			)
		}
	}
});

export default homeDrawer;
