import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import LoginForm from './src/LoginForm';
import RootNavigator from './src/Route';

export default class App extends Component<{}> {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyDbcgKu-uuVago3qOmoDPvBC2XAX1-65mQ',
			authDomain: 'saving-smi.firebaseapp.com',
			databaseURL: 'https://saving-smi.firebaseio.com',
			projectId: 'saving-smi',
			storageBucket: 'saving-smi.appspot.com',
			messagingSenderId: '436842026148'
		});
	}
	render() {
		return <RootNavigator />;
	}
}
