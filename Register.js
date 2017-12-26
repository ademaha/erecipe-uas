import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, } from 'react-native';

import { StackNavigator } from "react-navigation";
import * as firebase from 'firebase';



export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  email: "",
		  name: "",
		  password: "",
		  password_confirmation: ""
		};
	  }
	static navigationOptions = {
    	header: null
	  };
	  //firebase
	  async signup(email,password){
		try {
		  await firebase.auth().createUserWithEmailAndPassword(email,password);
		  var userId = firebase.auth().currentUser.uid;
		  this.writeToDatabase(userId);
		  alert("Signup Success!");
		  this.props.navigation.navigate("Login");
		} catch (error) {
		  alert(error.toString());
		}
	  }
	  writeToDatabase = (userId) => {
		let today = new Date();
		let Times = today.getDate() + " " + today.getMonth() + " " + today.getFullYear() + 
		" " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var database = firebase.database().ref("Users").child(userId);
		database.set({
		  username: this.state.name,
		  email : this.state.email,
		  password : this.state.password
		});
	  }
	render() {
		const { navigate } =this.props.navigation;
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Buat Akun Erecipe</Text>
          		
				<TextInput 
				value={this.state.name}
            	onChangeText={name => this.setState({ name })}
            	style={styles.input}
            	placeholder="Username"
            	placeholderTextColor="#FFFFFF"
            	returnKeyType="next"
            	onSubmitEditing={() => this.emailInput.focus()}
          		/>
					{/* style={styles.textinput}
					placeholder="Username"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.nameInput.focus()}
					underlineColorAndroid={'transparent'} /> */}

					<TextInput
            		value={this.state.email}
            		onChangeText={email => this.setState({ email })}
           	 		style={styles.input}
            		placeholderTextColor="#FFFFFF"
            		returnKeyType="next"
            		ref={input => (this.emailInput = input)}
            		onSubmitEditing={() => this.passwordCInput.focus()}
            		keyboardType="email-address"
            		autoCapitalize="none"
            		autoCorrect={false}
            		placeholder="Email"
          			/>
					  <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#FFFFFF"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          <TextInput
            value={this.state.password}
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Ulang Password"
            secureTextEntry={true}
            placeholderTextColor="#FFFFFF"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />

				{/* <TextInput
					style={styles.textinput}
					placeholder="Email"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.emailInput.focus()}
					ref={(input) => this.nameInput = input}
					keyboardType="email-address"
					underlineColorAndroid={'transparent'} /> */}

				{/* <TextInput 
					style={styles.textinput} 
					placeholder="Password"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.passwordInput.focus()}
					ref={(input) => this.emailInput = input}
					underlineColorAndroid={'transparent'} /> */}

				{/* <TextInput 
					style={styles.textinput}
					placeholder="Ulangi Password"
					placeholderTextColor="#FFFFFF"
					secureTextEntry
					ref={(input) => this.passwordInput = input}
					underlineColorAndroid={'transparent'} /> */}

				<TouchableOpacity style={styles.button} onPress={()=> this.signup(this.state.email,this.state.password)}>
					<Text style={styles.btntext}>Registrasi</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F39C12',
		paddingLeft: 60,
		paddingRight: 60,
		alignSelf: 'stretch'
	},
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFFFFF',
		paddingBottom: 10,
		marginBottom: 40
	},
	textinput: {
		alignSelf: 'stretch',
		backgroundColor: '#F39C12',
		height: 40,
		marginBottom: 20,
		color: '#FFFFFF',
		paddingHorizontal: 10
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 15,
		backgroundColor: '#C0392B',
		marginTop: 30,
	},
	btntext: {
		color: '#FFFFFF',
		fontSize: 17,
		fontWeight: 'bold'
	}
});