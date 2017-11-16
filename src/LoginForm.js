import React, { Component } from 'react';
import {
	View,
	Button,
	TextInput,
	ActivityIndicator,
	Text,
	Alert,
	Image,
	StyleSheet,
	AsyncStorage,
	Keyboard
} from 'react-native';
import firebase from 'firebase';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	image: {
		flexGrow: 1,
		height: null,
		width: null,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

class LoginForm extends Component {
	state = { email: '', password: '', loading: false };

	constructor(props) {
		super(props);
	}

	onLoginPress() {
		AsyncStorage.clear();
		this.setState({ error: '', loading: true });
		const { email, password } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(async ({ navigation }) => {
				// Alert.alert('Berhasil Login', '');
				this.setState({ error: '', loading: false });
				AsyncStorage.setItem('currentEmail', email);
				const value = await AsyncStorage.getItem('currentEmail');
				this.props.navigation.navigate('Home');
				Keyboard.dismiss();
			})
			.catch(() => {
				Alert.alert('Gagal Login', 'Email atau password tidak dapat dikenali');
				this.setState({ error: 'Authentication failed.', loading: false });
			});
	}

	renderButtonOrSpinner() {
		if (this.state.loading) {
			return <ActivityIndicator size="small" />;
		}
		return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
	}

	register = ({ navigation }) => {
		this.props.navigation.navigate('Register');
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../images/logo.png')} style={styles.image} />
				<TextInput
					label="Email Address"
					placeholder="you@domain.com"
					value={this.state.email}
					onChangeText={email => this.setState({ email })}
				/>
				<TextInput
					label="Password"
					autoCorrect={false}
					placeholder="*******"
					secureTextEntry
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
				/>
				{this.renderButtonOrSpinner()}
				<Button title="Register" color="turquoise" onPress={this.register} />
			</View>
		);
	}
}

export default LoginForm;
