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
import firebase from 'firebase';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentEmail: '', loading: false
		};
	}

	componentDidMount = async () => {
		await AsyncStorage.getItem('currentEmail')
			.then(value => {
				this.setState({ currentEmail: value });
			})
			.done();
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
		var data = [{ no: 1, kota: 'Banasdsadsadung' }, {no: 2, kota: 'Sukabumi'}];
		data.push({no: 3, kota: 'Jakarta'});
		firebase.database().ref('tes').set(data);
		console.log(data);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Welcome {this.state.currentEmail}</Text>
				<Button onPress={this.createJson} title="Click Me" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
