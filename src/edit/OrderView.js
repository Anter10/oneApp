import React from 'react'
import {Modal, Image, Button, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json



let normalfontsize = 15;
let blackTitleSize = 14;


class Order extends React.Component{
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
		return (
			 
                    <TouchableHighlight style={{flex:1}}  onPress={this.onPress.bind(this)}>
					<View style={styles.row} >
					      <Image style={styles.thumb} source={require('../.././kq.jpg')} />
			              <Text>{this.item.key}</Text> 
			              <Text style={styles.valuelabel}>({this.item.value}{this.item.dw})</Text>
				    </View>
				    </TouchableHighlight>
			 
		)
	}
}

export default class OrderView extends React.Component{
	static navigationOptions = ({ navigation }) => {
	   return {
		 title: navigation.getParam('show', 'A Nested Details Screen'),
	   };
	};
	space(){
		    return(<View style={{height:0.5, flex:1, backgroundColor: 'gray'}}/>)
	};
	render(){
		return(
           <View style={styles.container}>
		            
			        <FlatList
			          data={[
			            {key: '碗豆浆',value:'12',dw:'元',spname:'花椒'},
			            {key: '家做豆腐',value:'12',dw:'元',spname:'花椒'},
			            {key: '青椒',value:'12',dw:'元',spname:'花椒'},
			            {key: '红薯',value:'12',dw:'元',spname:'花椒'},
			           
			          ]}
			          ItemSeparatorComponent={this.space}
			          renderItem={({item}) =>
			           <View style={styles.row}>
			                 <Order data={item} />
			           </View>
			            
			          }
			        />
             </View>
		);
	}
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0,
  },
  row: {
    flexDirection: 'row',
    padding: 1,
    height:70,
    alignItems:'center',
    backgroundColor: '#F6F6F6',
  },

  colum: {
  	flex:1,
    flexDirection: 'column',
    alignItems:'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 5,
    backgroundColor: '#F6F6F6',
  },

  thumb: {
  	borderRadius:2,
    width: 64,
    padding:25,
    alignItems:'center',
    justifyContent:'center',
    height: 64,
  },
 
  item: {
    fontSize: blackTitleSize,
    color:'black',
    paddingBottom:5,
    fontWeight:'normal',
    justifyContent:'space-between',
  },
   nameitem: {
    fontSize: normalfontsize,
    color:'red',
    fontWeight:'normal',
  },
  subnameitem: {
    fontSize: normalfontsize-2,
    color:'red',
    fontWeight:'normal',
  },
  buybutton:{
    
  	justifyContent:'center',
  	flexDirection: 'column',
  	alignItems:'center',
  },
  leftpart:{
  	paddingLeft:15,
  	flexDirection: 'row',
  	alignItems:'flex-end',
  	justifyContent:'space-between',
  },
  valuelabel:{
  	fontSize:12,
  	color:'red',
  }


})


