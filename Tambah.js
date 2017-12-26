import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  Picker,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  Alert,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from "react-navigation";
import {Label, Icon, Container,Footer, FooterTab, Form, Item, Input, Tab, Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
import * as firebase from 'firebase';

export default class Boiler extends Component {
    constructor() {
        super();
        this.state = {
            Nama: "",
            Bahan: "",
            Resep:"",
            place:"appetizer"
          };
    }
 render() {
     return(
         <View style={styles.container}>
         <Text style={{fontSize : 24, color : 'black'}}>Tambah Resep</Text>
         <KeyboardAvoidingView style={styles.keyboard}>
            <TextInput
              placeholder="Nama Makanan"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={Nama => this.setState({ Nama })}
            />
            <TextInput
              placeholder="Bahan"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              ref={input => (this.passwordInput = input)}
              value={this.state.password}
              onChangeText={Bahan => this.setState({ Bahan })}
            />
            <TextInput
              placeholder="Resep/Cara membuat"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="go"
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={Resep => this.setState({ Resep })}
            />
            <Picker
                selectedValue={this.state.place}
                onValueChange={(itemValue, itemIndex) => this.setState({place: itemValue})}>
                <Picker.Item label="Appetizer" value="appetizer" />
                <Picker.Item label="Maincourse" value="maincourse" />
                <Picker.Item label="Dessert" value="dessert" />
            </Picker>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                  
                firebase.database().ref().child(this.state.place).push({
                        nama : this.state.Nama,
                        bahan : this.state.Bahan,
                        resep : this.state.Resep
                    })
                this.props.navigation.navigate("adminhome")
                }}>
              <Text style={styles.buttonText}>Add Resep</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
            <View>
            </View>
        </View>
     );
 }   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#F39C12"
    },
    subtext: {
        color: "#ffffff",
        marginTop: 10,
        width: 160,
        textAlign: "center",
        opacity: 0.8
      },
      keyboard:{
        margin: 20,
        padding: 20,
        alignSelf: "stretch"
      },
      buttonContainer: {
        backgroundColor: "#c0392b",
        paddingVertical: 15
      },
      buttonText: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "700"
      },
      button: {
        backgroundColor: "#27ae60",
        paddingVertical: 15
      }
  });
  

AppRegistry.registerComponent("Tambah", () => Tambah);
// rgba(255,255,255,0.2)