import React from 'react'
import {Modal, Image, Button, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json



export default class SealHh extends React.Component{
	static navigationOptions = ({ navigation }) => {
	   return {
		 title: navigation.getParam('show', 'A Nested Details Screen'),
	   };
	};
	render(){
		return(
           <Text>
                  this is Edit view;
           </Text>
		);
	}
}