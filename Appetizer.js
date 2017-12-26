import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  Alert,
  TouchableOpacity,
  ListView,
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from "react-navigation";
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input, Tab, Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
import * as firebase from 'firebase';
export default class Boiler extends Component {

  constructor(){
    super();
  let ds = new ListView.DataSource({rowHasChanged : (r1,r2) => r1 !== r2 });
  this.state = {
    itemDataSource : ds
  }
  this.itemsRef = firebase.database().ref('appetizer');
  this.renderRow = this.renderRow.bind(this);
  }
  componentWillMount(){
    this.getItems(this.itemsRef);
  }
  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  getItems(itemRef){
    itemRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) =>{
        items.push({
          Nama : child.val().nama,
          Bahan : child.val().bahan,
          Resep : child.val().resep,
          _key : child.key
        });
      });
      this.setState({
        itemDataSource : this.state.itemDataSource.cloneWithRows(items)
      });
    });
  }
  
  renderRow(item){
    return(
      // <TouchableHighlight
      // onPress = {() => {
      //   this.pressRow(item);
      // }}
      // >
      <View style={{flexDirection:'column'}}>
      <Image source={require('./appetizer.png')} style={{width : 100 , height : 100}}>
      </Image>
      <View style={styles.li}>
        <View style={styles.liTextView}>
          <Text style={styles.liText}>{item.Nama}</Text>
        </View>
        <View style={styles.liTextView}>
          <Text style={styles.liText}>{item.Bahan}</Text>
        </View>
        <View style={styles.liTextView}>
          <Text style={styles.liText}>{item.Resep}</Text>
        </View>
      </View>
      </View>
      // </TouchableHighlight>
    );
  }



  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#0101DF",
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return(
    <View style={styles.container}>
            <ListItem>
            <Text style={{fontWeight:'bold', fontSize:18}} >Appetizer </Text>
            </ListItem>
            <ListView
              dataSource = {this.state.itemDataSource}
              renderRow = {this.renderRow}
              style = {styles.liContainer}
            />
            {
            }
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  li: {
    backgroundColor : '#fff',
    borderColor : 'transparent',
    borderWidth : 2,
    width : 300,
  },
  liTextView : {
  },
  liText : {
    color : '#333',
    fontSize : 16,
  },
  liContainer : {
    height : 700, 
  },
  keyboard:{
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
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

AppRegistry.registerComponent("Appetizer", () => Appetizer);