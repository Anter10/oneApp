import React from 'react'
import {Modal, ScrollView,Image,TextInput, Button,TouchableOpacity,Dimensions, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json


const {height, width} = Dimensions.get('window');

export default class LoginView extends React.Component{
	constructor(props){
		super(props);
       
	}

     static navigationOptions = {
	       title:"手机登陆",
	 }


	sendCode(){
		alert("发送验证码")
	}

	loginAction(){
		alert("登陆账号")
	}
    render(){
    	return (
    		<View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
                  <FlatList
			            data={[]}

			            ListHeaderComponent={()=> 
 							<View style={{flex: 1, backgroundColor:'white',alignItems:'center' }}>
						          <View style={{flex: 1,flexDirection:'column',justifyContent:'center',alignItems: 'center',marginTop:40,width:width,}}>     
					                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
			                                       <Text style={{marginRight:10,paddingTop:10,}}>手机号码</Text>
			                                       <TextInput   style={{fontSize:16,width:width - 135,paddingLeft:5,height:35,borderWidth:0,borderColor:'gray',borderRadius:5}} placeholderTextColor='grey' clearButtonMode="while-editing"  placeholder="请输入手机号"  />
									        </View>
									        <View style={{marginTop:2,width:width - 60,backgroundColor:'grey',height:1,}}> </View>
								 </View>
								  <View style={{flexDirection:'column',justifyContent:'center',alignItems: 'center',marginTop:20,width:width,marginBottom:40}}>     
					                        <View style={{flexDirection:'row',height:35,alignItems:'flex-start'}}>
			                                       <Text style={{marginRight:10,paddingTop:10,}}>验证码</Text>
			                                       <TextInput style={{fontSize:16,width:width - 243,marginLeft:10,paddingLeft:5,height:35,borderWidth:0,borderColor:'gray',borderRadius:5,}} placeholderTextColor='grey' clearButtonMode="while-editing" placeholder="请输验证码"/>
									               <View style={{marginLeft:15,height:35,width:1,backgroundColor:'lightgrey'}}></View>
									               <Text style={{marginRight:10,paddingTop:10,color:'black', marginLeft:10,}} onPress={this.sendCode.bind(this)} >发送验证码</Text>
									        </View>
									        <View style={{marginTop:2,width:width - 60,backgroundColor:'grey',height:1,}}> </View>
								 </View>
					              <TouchableOpacity onPress={this.loginAction.bind(this)} style={{backgroundColor:'#30A54A',borderColor:'lightgrey',alignItems:'center',fontSize:18,justifyContent:'center',borderRadius:5,borderWidth:1,width:width-60,height:35}}>
                                        <Text>登陆</Text>
			        			  </TouchableOpacity>
					      </View>


			            }
			           ItemSeparatorComponent={this.space}

			           renderItem={({item}) =>
			           <View style={styles.row}>
			                 
			           </View>
			          }
			        />
			       
    		</View>
             
    	)
    }


}