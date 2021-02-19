import React from 'react';
import { Image,View,ImageBackground,StyleSheet,ScrollView,FlatList } from 'react-native';
import { Button, Container, Text } from 'native-base';
import CoverNoticia from './components/coverNoticia';
import * as axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      noticias: null,
    };
  }

  componentDidMount(){

    this.loadNews();
  }

  async loadNews(){
    let flag = null;
    await axios.get('http://192.168.10.106:8082/noticias')
    .then(function (response) {
      
      flag = (response.data.clients);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    this.setState({
      noticias: flag,
    })
    // Request para api;
    // Salva no state;
  }

  render() {
    const httpImage = {uri:'https://s2.glbimg.com/DtARH2zBflmP_5HjOMMAhFzABh4=/0x0:2115x1405/397x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Q/s/Si3PO2TdGrIYeVpXZ1FA/2020-05-09t000000z-1874358627-rc25lg9vwuf5-rtrmadp-3-health-coronavirus-tesla.jpg'};
    var data = [
        {
            id:'asd',
            title:'first item'
        },        {
            id:'as23d',
            title:'second item'
        },        {
            id:'as33d',
            title:'third item'
        },
    ];

    var renderItem = ({item}) =>(

      <CoverNoticia uri={item.uri} item={item} navigation={this.props.navigation} ></CoverNoticia>

    );

    let noticias = this.state.noticias;

    return (
    
      <Container style={styles.container} >
          <FlatList  
            data={this.state.noticias}
            renderItem={renderItem}
            keyExtractor={item => item.id}

          />
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 2,
      resizeMode: "cover",
      justifyContent: "center"
    },
    viewText:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-end"
    },  
    text: {
      paddingLeft:10,
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      textAlign:"left",
      backgroundColor: 'rgba(0, 0, 0, 0.30)',
    }
  });
  