import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import * as firebase from 'firebase';
import { StackNavigator } from "react-navigation";

export default class Profil extends Component {
    constructor() {
        super();
        this.state = {
            nama : '',
            email: '',
            userId : firebase.auth().currentUser.uid
        }
    }
    componentWillMount() {
        firebase.database().ref("Users/"+this.state.userId).on("value",(snap)=>{
            this.setState({nama : snap.val().username})
            this.setState({email : snap.val().email})
        })
    }
    componentDidMount() {
        firebase.database().ref("Users/"+this.state.userId).on("value",(snap)=>{
            this.setState({nama : snap.val().username})
            this.setState({email : snap.val().email})
        })
    }
	render() {
		return (	
			<View>
                <Text>
				<Text style={{fontWeight:'bold', fontSize:18}} >Nama : </Text>
                <Text>{this.state.nama}</Text>
				</Text>
				<Text>
				<Text>
				</Text>	
			  	<Text style={{fontWeight:'bold', fontSize:18}} >Email : </Text>
                <Text>{this.state.email}</Text>
				</Text>
			</View>
    );
  }
}
               

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#0101DF',
		flex: 1
	},
	logo: {
		width: 350,
		height: 110
	},
	logoWrapper: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center'
	},
	subtitle: {
	color: '#000000',
	fontWeight: '200',
	paddingBottom: 10,
	textAlign: 'center',
	fontSize: 20,
	opacity: 0.5
	}
});