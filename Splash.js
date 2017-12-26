import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.logoWrapper}>
					<Image
						style={styles.logo}
						source={require("./erecipe.jpg")}
					/>				
				</View>
				<View>
					<Text style={styles.subtitle}>Resep One for All</Text>

					<Text style={styles.subtitle}>Find your Recipe Here</Text>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#d0d3d4',
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