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
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from "react-navigation";
import {Picker, Label, Icon, Container, Footer, FooterTab, Form, Item, Input, Tab, Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
export default class Boiler extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#0101DF",
      elevation: null
    },
    header: null
  };
  render() {
    return(
      <Container>
      <Header />
      <View style={styles.container}>
                <ListItem>
                <Text style={{fontWeight:'bold', fontSize:18}} >WELCOME ADMIN ERECIPE</Text>
                </ListItem>
                <Text style={{fontWeight:'bold', fontSize:18}} >KATEGORI</Text>
                <ListItem onPress={() => this.props.navigation.navigate("Appadmin")}>
                  <Thumbnail style={{ marginRight:'2%'}} source={require('./appetizer.png')}/>
                  <Body style={{marginRight:'2%'}}>
                    <Text style={{fontWeight:'bold', fontSize:18}} >Appetizer</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("Mainadmin") }>
                  <Thumbnail style={{ marginRight:'2%'}} source={require('./maincourse.jpg')}/>
                  <Body style={{marginRight:'2%'}}>
                    <Text style={{fontWeight:'bold', fontSize:18}} >Maincourse</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("Desadmin") }>
                  <Thumbnail style={{ marginRight:'2%'}} source={require('./desert.jpg')}/>
                  <Body style={{marginRight:'2%'}}>
                    <Text style={{fontWeight:'bold', fontSize:18}} >Dessert</Text>
                  </Body>
                </ListItem>
      </View>
      <Footer>
        <FooterTab>
          <Button vertical
            onPress={()=>{
              this.props.navigation.navigate("Tambah");
            }}
          >
          <Icon name="plus" />
          <Text>Tambah</Text>
        </Button>
        {/* <Button vertical>
          <Icon name="edit" />
          <Text>Edit</Text>
        </Button>
        <Button vertical>
          <Icon active name="delete" />
          <Text>Delete</Text>
        </Button> */}
      </FooterTab>
    </Footer>
  </Container>
  );
}
}

  

      



//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: 900,
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
    backgroundColor: "#D0D3D4",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#0101DF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#D0D3D4",
    paddingVertical: 15
  }
});

AppRegistry.registerComponent("adminhome", () => adminhome);