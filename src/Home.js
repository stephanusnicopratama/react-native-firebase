/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Button, Alert } from 'react-native';

export default class Home extends Component {
// const currentEmail = await AsyncStorage.getItem('currentEmail');

	render () {
		return (
			<View style={styles.container}>
				<Text>Welcome </Text>
				<Button onPress={this.logout} title="Log out"></Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
