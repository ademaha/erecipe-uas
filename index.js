import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import Boiler from './Boiler';
import Appetizer from './Appetizer';
import Maincourse from './Maincourse';
import Dessert from './Dessert';
import Profil from './Profil';
import adminlogin from './adminlogin';
import adminhome from './adminhome';
import Tambah from './Tambah';
import Appadmin from './Appadmin';
import Mainadmin from './Mainadmin';
import Desadmin from './Desadmin';



import { StackNavigator } from "react-navigation";
import * as firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyBl5nCe96vNTjDdeObI3m3jhHxtrDDPcT0",
    authDomain: "erecipe-d3258.firebaseapp.com",
    databaseURL: "https://erecipe-d3258.firebaseio.com",
    projectId: "erecipe-d3258",
    storageBucket: "erecipe-d3258.appspot.com",
    messagingSenderId: "525382581263"
  };
  firebase.initializeApp(config);

export default class Indek extends Component<{}> {
  static navigationOptions = {
    header: null
  };

  render() {
  const { navigation } = this.props;
  const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

const Navigasi = StackNavigator ({
  Login: { screen: Login },
  Register: { screen: Register },
  Boiler: { screen: Boiler },
  Appetizer: { screen: Appetizer },
  Maincourse: { screen: Maincourse },
  Dessert: { screen: Dessert },
  Profil : { screen: Profil},
  adminlogin : {screen: adminlogin},
  adminhome : {screen: adminhome},
  Tambah : {screen: Tambah},
  Appadmin : {screen: Appadmin},
  Mainadmin : {screen: Mainadmin},
  Desadmin : {screen: Desadmin}
  
});

AppRegistry.registerComponent('erecipe', () => Navigasi);

