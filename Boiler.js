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
                <Text style={{fontWeight:'bold', fontSize:18}} >Welcome To erecipe, Resep one for all</Text>
                </ListItem>
                <Text style={{fontWeight:'bold', fontSize:18}} >Pilih Kategori Anda :</Text>
                <ListItem onPress={() => this.props.navigation.navigate("Appetizer")}>
                  <Thumbnail style={{ marginRight:'2%'}} source={require('./appetizer.png')}/>
                  <Body style={{marginRight:'2%'}}>
                    <Text style={{fontWeight:'bold', fontSize:18}} >Appetizer</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("Maincourse") }>
                  <Thumbnail style={{ marginRight:'2%'}} source={require('./maincourse.jpg')}/>
                  <Body style={{marginRight:'2%'}}>
                    <Text style={{fontWeight:'bold', fontSize:18}} >Maincourse</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate("Dessert") }>
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
              this.props.navigation.navigate("Profil");
            }}
          >
            <Icon name="profil" />
            <Text>Profil</Text>
          </Button>
          {/* <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical active>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>  */}
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

AppRegistry.registerComponent("Boiler", () => Boiler);