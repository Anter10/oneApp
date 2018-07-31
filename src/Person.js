import React from 'react'
import {Image, Button, View,TouchableHighlight,TouchableOpacity,Dimensions,Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
// import ItemCell from 'react-native-item-cell'
 
 const {height, width} = Dimensions.get('window');


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
                routeName: this.item.name,
                params: this.item,
            });
            // alert(global.BuyappNavRef.push)
            global.appNavRef.dispatch(navigateAction)
    }
 
    render(){ 
        return(
            <TouchableOpacity style={{flex:1,height:45}}  onPress={this.onPress.bind(this)}>
            
            <View style={{flexDirection:'row', height:45,justifyContent:'center',alignItems:'center'}}>
               <View style={{width:width - 20, backgroundColor:'white',justifyContent:'flex-start',flexDirection:'row',marginLeft:0,}}>
                          <View style={{width:40,}}>
                                <Ionicons style={{paddingLeft:5,}} name={this.item.iconname} size = {26} /> 
                          </View>
                          <Text style={styles.showtitle}>{this.item.show} </Text>
                          
                </View>
                <Ionicons style={{marginRight:5,}} name="ios-arrow-forward" color="lightgrey" size = {16} /> 
            </View>
            </TouchableOpacity>
        )
    }
}





export default class Person extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                hidebar:true,
            }
         }
         
         static navigationOptions = {
           title:'自己',
           tabBarVisible:false,
          
        }

        _handlerPress = () => {
           // const navigateAction = NavigationActions.navigate({
           //      type: 'Navigation/NAVIGATE',
           //      routeName: {this.state.routename},
           //      params: {},
           //  });
           //  // alert(global.BuyappNavRef.push)
           //  global.appNavRef.dispatch(navigateAction)
        };
        space(){
            return(<View style={{height:0.5, flex:1, backgroundColor: 'gray'}}/>)
        };
        login(){
            const navigateAction = NavigationActions.navigate({
                type: 'Navigation/NAVIGATE',
                routeName: 'loginv',
                params: {},
            });
            // alert(global.BuyappNavRef.push)
            global.appNavRef.dispatch(navigateAction)
        }
        render(){
            const { navigation } = this.props;
            const otherParam = navigation.getParam('name', '传过来的名字');
            return(
                 <View style={styles.container}>
                    <TouchableOpacity onPress={this.login.bind(this)} style={{height:40,width:width,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
                           <Text>登陆</Text>
                    </TouchableOpacity>
                    <FlatList
                      data={[
                        {name:"person",show: '郭有超',iconname:"md-person"},
                        {name:"order",show: '我的订单',iconname:"ios-paper"},
                        {name:"kaquan",show: '卡券',iconname:"md-card"},
                        {name:"edit",show: '设置',iconname:"md-settings"},
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
    width:width,
    height:45,
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'flex-start',
  },
  showtitle:{
    paddingLeft:1,
    paddingTop:5,
    alignItems:'flex-start',
    color:'black',
    fontSize:14,
  }
  

})


