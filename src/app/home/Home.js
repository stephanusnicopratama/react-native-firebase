/* @flow */

import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	AsyncStorage,
	Button,
	Alert,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';
import firebase from 'react-native-firebase';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentEmail: '',
			user: '',
			loading: false
		};
	}

	componentDidMount = async () => {
		await AsyncStorage.getItem('currentEmail')
			.then(value => {
				this.setState({ currentEmail: value });
			})
			.done();
	};

	login = email => {
		alert('user: ' + email);
	};

	getMoviesFromApiAsync() {
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson.movies);
				return responseJson.movies;
			})
			.catch(error => {
				console.error(error);
			});
	}

	createJson() {
		var data = [
			{ no: 1, kota: 'Banasdsadsadung' },
			{ no: 2, kota: 'Sukabumi' }
		];
		data.push({ no: 3, kota: 'Jakarta' });
		firebase
			.database()
			.ref('tes')
			.set(data);
		console.log(data);
	}

	tes() {
		// var data = [
		// 	{ no: 1, kota: 'Banasdsadsadung' },
		// 	{ no: 2, kota: 'Sukabumi' }
		// ];
		// data.push({ no: 3, kota: 'Jakarta' });
		firebase.firestore()
			.collection('cities')
			.doc('LA')
			.set({
				name: 'Los Angeles',
				state: 'CA',
				country: 'USA'
			})
			.then(function() {
				console.log('Document successfully written!');
			})
			.catch(function(error) {
				console.error('Error writing document: ', error);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					placeholder="User"
					placeholderTextColor="#9a73ef"
					autoCapitalize="none"
					onChangeText={user => this.setState({ user })}
				/>

				<TouchableOpacity
					style={styles.submitButton}
					onPress={() => this.login(this.state.user)}
				>
					<Text style={styles.submitButtonText}> Add </Text>
				</TouchableOpacity>
				<Button title="Click Me" onPress={this.tes} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 23
	},
	input: {
		margin: 15,
		height: 40,
		borderColor: '#7a42f4',
		borderWidth: 1
	},
	submitButton: {
		backgroundColor: 'turquoise',
		padding: 10,
		margin: 15,
		height: 40
	},
	submitButtonText: {
		color: 'white'
	}
});
