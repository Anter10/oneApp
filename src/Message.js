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
        window.appNavRef.dispatch(navigateAction);
    }
 
    render(){ 
        return(
            <TouchableHighlight style={{flex:1}}  onPress={this.onPress.bind(this)}>
            <View style={styles.row} >
                     
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
            // alert(window.BuyappNavRef.push)
           window.appNavRef.dispatch(navigateAction)
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
                         {show: '呈明',iconname:"md-person"},
                        {show: '王旭',iconname:"ios-paper"},
                        {show: '李玉刚',iconname:"md-basket"},
                        {show: '费玉清',iconname:"md-card"},
                        {show: '刘烨分',iconname:"md-settings"},
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


