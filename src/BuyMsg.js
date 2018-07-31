import React from 'react'
import {Button, View, Text} from 'react-native'
 import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
let titleName = "商品信息"
export default class BuyMsg extends React.Component{
        constructor(props){
         	super(props);
         	this.state = {
         		hidebar:true,
         	}
         	this.title = this.props.navigation.getParam('name', '商品名称');
         	titleName = this.title;
         	
         }
     	 
		  static navigationOptions = ({ navigation }) => {
		    return {
		      title: navigation.getParam('name', 'A Nested Details Screen'),
		    };
		  };



	    _handlerPress = () => {
            //handle navigation
	        const navigateAction = NavigationActions.navigate({
	            type: 'Navigation/NAVIGATE',
	            routeName: 'bNav',
	            params: {},
	        });
	        alert(this.props.navigation.push)
	        global.BuyappNavRef.dispatch(navigateAction)
	    };

        render(){
        	 
	     	const { navigation } = this.props;
	     	const otherParam = navigation.getParam('spname', '传过来的名字');
	        return(
	             <View style={{ flex: 1,}}>
	                  <Text>
	                        This param is {otherParam}
	                  </Text>
	                    
	             </View>
	     	)
       }


}


