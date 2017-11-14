/* @flow */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	AsyncStorage,
	Button,
	Alert
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Jadwal from './app/jadwal/Jadwal';
import User from './app/user/User';

export default class Home extends Component {
	state = { currentEmail: '', loading: false };

	componentDidMount = async () => {
		await AsyncStorage.getItem('currentEmail')
			.then(value => {
				this.setState({ currentEmail: value });
			})
			.done();
	};

	logout = ({ navigation }) => {
		AsyncStorage.clear();
		this.props.navigation.navigate('Login');
	};

	menu =  ({ navigation }) => {
		this.props.navigation.navigate('DrawerToggle');
		console.log('masuk');
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Welcome {this.state.currentEmail}</Text>
				<Button onPress={this.logout} title="Log out" />
				<Button
					onPress={this.menu}
					title="Open Drawer"
				/>
			</View>
		);
	}
}

const RootDrawer = DrawerNavigator({
	User: {
		screen: User,
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
			drawerLabel: 'Profile',
			drawerIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-person' : 'ios-person-outline'}
					size={20}
					style={{ color: tintColor }}
				/>
			)
		}
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
