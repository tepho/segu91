import React from 'react';
import { Image,View,ImageBackground,StyleSheet,TouchableHighlight,ScrollView } from 'react-native';
import { Container, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();
export default class CoverNoticia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }


  render() {
    const httpImage = {uri:'https://s2.glbimg.com/DtARH2zBflmP_5HjOMMAhFzABh4=/0x0:2115x1405/397x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Q/s/Si3PO2TdGrIYeVpXZ1FA/2020-05-09t000000z-1874358627-rc25lg9vwuf5-rtrmadp-3-health-coronavirus-tesla.jpg'};
    const uri = {uri:this.props.uri};

    return (
      <TouchableHighlight 
        onPress={() => this.props.navigation.navigate('Details', {
          item: this.props.item,

        })}
      >
            <View style={styles.container} >
            <ImageBackground  source={uri} style={styles.image}  >
                <View style={styles.viewText}>
                  <View style={{padding:10,flexDirection:'row',margin:3}}>
                    <Text style={{padding:5,backgroundColor: 'rgba(0, 0, 0, 0.80)',color:'green',paddingRight:5}} >{this.props.item.tag1}</Text>
                    <Text style={{padding:5,backgroundColor: 'rgba(0, 0, 0, 0.80)',color:'red'}}>{this.props.item.tag2}</Text>
                  </View>
                    <Text style={styles.text}>{this.props.item.titulo}</Text>
                </View>
            </ImageBackground>
            </View>
          </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:220,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "center"
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
  