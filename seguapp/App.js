import * as React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Row } from 'native-base';
import { Text, View, StyleSheet,Image,ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home';
import Health from './src/health';
import Sport from './src/sport';


function Details({ route, navigation }){
  // Data da noticia para renderizar 
  const { item } = route.params;

  const uri = {uri: ""+item.uri};
  const httpImage = {uri:'https://s2.glbimg.com/DtARH2zBflmP_5HjOMMAhFzABh4=/0x0:2115x1405/397x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Q/s/Si3PO2TdGrIYeVpXZ1FA/2020-05-09t000000z-1874358627-rc25lg9vwuf5-rtrmadp-3-health-coronavirus-tesla.jpg'};
  return (
    <ScrollView style={styles.container} >
    <ImageBackground  source={uri} style={styles.image}  >
      <View style={styles.viewText}>
        <View style={{padding:10,flexDirection:'row',margin:3}}>
          <Text style={{padding:5,backgroundColor: 'rgba(0, 0, 0, 0.80)',color:'green',paddingRight:5}} >{item.tag1}</Text>
          <Text style={{padding:5,backgroundColor: 'rgba(0, 0, 0, 0.80)',color:'red'}}>{item.tag2}</Text>
        </View>
      </View>
    </ImageBackground>
        <View style={styles.viewText}>
            <Text style={styles.text}>{item.titulo}</Text>
            <Text style={styles.text}>{item.noticiabody}</Text>
        </View>
    </ScrollView>
  )
}
function HomeNest() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Health" component={Health} />
      <Tab.Screen name="Sport" component={Sport} />
  </Tab.Navigator>
  );
}
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Header style={{padding:10}}>
            <Body style={{justifyContent:'center',flexDirection:'row'}}>
              <Title >91</Title>
            </Body>
        </Header>
        <Stack.Navigator>
          <Stack.Screen  options={{headerShown: false}} name="Home" component={HomeNest} />
          <Stack.Screen  name="Details" component={Details} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:220,
    flexDirection: "column",
    
  },
  image: {
    flex: 1,
    minHeight:250,
    resizeMode: "contain",
  },
  viewText:{
      flex:1,
      flexDirection:"column",
      justifyContent:"flex-end"
  },
  viewTextTag:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-start"
},  
  text: {
    paddingLeft:10,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign:"left",
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
  },
  tag: {
    paddingLeft:10,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign:"left",
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
  }
});
