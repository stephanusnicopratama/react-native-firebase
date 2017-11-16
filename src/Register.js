/* @flow */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	ActivityIndicator,
	Button,
	SectionList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

export default class Register extends Component {
	state = { email: '', password: '', loading: false };

	register() {
		this.setState({ error: '', loading: true });
		const { email, password } = this.state;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				Alert.alert('Success', 'Berhasil mendaftarkan email baru');
				this.setState({ error: '', loading: false });
			})
			.catch(() => {
				Alert.alert('Error', 'User gagal ditambahkan');
				this.setState({ error: 'Authentication failed.', loading: false });
			});
	}

	renderButtonOrSpinner() {
		if (this.state.loading) {
			return <ActivityIndicator size="small" />;
		}
		return (
			<View style={styles.loginContainer}>
				<Button
					title="Register"
					backgroundColor="#3b5998"
					onPress={this.register.bind(this)}
					style={{ height: 50 }}
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<View style={styles.ViewList}>
						<Text style={styles.titleText}>E-mail</Text>
						<TextInput
							label="email"
							placeholder="user@domain.com"
							value={this.state.email}
							onChangeText={email => this.setState({ email })}
						/>
					</View>
					<View style={styles.ViewList}>
						<Text style={styles.titleText}>Password</Text>
						<TextInput
							label="email"
							placeholder="******"
							value={this.state.password}
							onChangeText={password => this.setState({ password })}
						/>
					</View>
				</View>
				{this.renderButtonOrSpinner()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	loginContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		bottom: 0,
		height: 100
	},
	ViewList: {
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	titleText: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});
