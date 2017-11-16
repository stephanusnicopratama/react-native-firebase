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

export default class Home extends Component {
	state = { currentEmail: '', loading: false };

	componentDidMount = async () => {
		await AsyncStorage.getItem('currentEmail')
			.then(value => {
				this.setState({ currentEmail: value });
			})
			.done();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Welcome {this.state.currentEmail}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
