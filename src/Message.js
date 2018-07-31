import React from 'react'
import {Image, Button, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json

let normalfontsize = 15;
let blackTitleSize = 14;
class BuyItem extends React.Component{
    constructor(props){
       super(props);
       this.item = this.props.data;
       this.onPress.bind(this);
    }

    onPress(){ 
      
        const navigateAction = NavigationActions.navigate({
                type: 'Navigation/NAVIGATE',
                routeName: 'bNav',
                params: this.item,
            });
        global.appNavRef.dispatch(navigateAction);
    }
 
    render(){ 
        return(
            <TouchableHighlight style={{flex:1}}  onPress={this.onPress.bind(this)}>
            <View style={styles.row} >
                      <Ionicons name={this.item.iconname} size={25} style={{marginLeft:15,}}/>
                      <Text style={styles.showtitle}>{this.item.show} </Text>
            </View>
            </TouchableHighlight>
        )
    }
}

export default class Message extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                hidebar:true,
            }
         }
         
         static navigationOptions = {
           title:'消息',
           tabBarVisible:false,
          
        }

        _handlerPress = () => {
            //handle navigation
            const navigateAction = NavigationActions.navigate({
                type: 'Navigation/NAVIGATE',
                routeName: 'bNav',
                params: {},
            });
            // alert(global.BuyappNavRef.push)
           global.appNavRef.dispatch(navigateAction)
        };
        space(){
            return(<View style={{height:0.5, flex:1, backgroundColor: 'gray'}}/>)
        };
        render(){
            const { navigation } = this.props;
            const otherParam = navigation.getParam('name', '传过来的名字');
            return(
                 <View style={styles.container}>
                    <FlatList
                      data={[
                        {show: '系统消息',iconname:"ios-notifications-outline"},
                        {show: '卖家消息',iconname:"ios-paper"},
                      ]}
                      ItemSeparatorComponent={this.space}
                      renderItem={({item}) =>
                       <View style={styles.row}>
                             <BuyItem data={item} />
                       </View>
                        
                      }
                    />

                  </View>
            )
       }


}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0,
  },
  row: {
    flexDirection: 'row',
    paddingLeft:0,
    paddingRight:0,
    height:45,
    alignItems:'center',
    backgroundColor: '#F6F6F6',
    justifyContent:'flex-start',
  },
  showtitle:{
    paddingLeft:4,
    alignItems:'flex-start',
    color:'black',
    fontSize:14,
  }
  

})


