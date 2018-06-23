import React from 'react'
import {Image, Button, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json

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
	            <Image style={styles.thumb} source={require('.././gyro_header.jpg')} />
				<View style={styles.leftpart}>
					  <View style={styles.column} >
		                    <Text style={styles.item}>买家:<Text style={styles.nameitem}>{this.item.key}</Text>  收购:{this.item.zl} {this.item.dw}</Text>
		                    <Text style={styles.item}>货物:<Text style={styles.nameitem}>{this.item.spname}</Text><Text style={styles.subnameitem}>({this.item.price} / {this.item.dw})</Text> </Text>
					  </View>
				</View>
		    </View>
		    </TouchableHighlight>
		)
	}
}

export default class Seal extends React.Component{
        constructor(props){
         	super(props);
         	this.state = {
         		hidebar:true,
         	}
         }
     	 
		 static navigationOptions = {
	       title:'卖东西',
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
			            {key: 'Devin',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jackson',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'James',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Joel',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'John',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jillian',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jimmy',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Julie',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Devdin',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jacdskson',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jamdses',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jodsel',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jodshn',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jidsllian',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Jiddsmmy',price:12,dw:'斤',spname:'花椒',zl:"120"},
			            {key: 'Juldsie',price:12,dw:'斤',spname:'花椒',zl:"120"}, 
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
    padding: 1,
    height:80,
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
  }


})


