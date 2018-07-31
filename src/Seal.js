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
	    global.appNavRef.dispatch(navigateAction);
	}
 
	render(){
		return(
            <TouchableHighlight style={{flex:1}}  onPress={this.onPress.bind(this)}>
			<View style={styles.row} >
	            <Image style={styles.thumb} source={{uri:this.item.hhicon}} />
				<View style={styles.leftpart}>
					  <View style={styles.column} >
		                    <Text style={styles.item}>买家:<Text style={styles.nameitem}>{this.item.buyname}</Text>  收购:{this.item.totalbuy} {this.item.hhdanwei}</Text>
		                    <Text style={styles.item}>货物:<Text style={styles.nameitem}>{this.item.name}</Text><Text style={styles.subnameitem}>({this.item.price} / {this.item.hhdanwei})</Text> </Text>
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
			          data={[{"buystatue":"0","totalbuy":"500","addtime":"20180624","hadbuy":"0","buyname":"郭有超","buyphone":"15810757355","hhdanwei":"斤","hhid":"201800001","id":"1","userphone":"15810757355","price":"20元","name":"柑橘","hhcstatue":"0","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"buystatue":"0","totalbuy":"500","addtime":"20180624","hadbuy":"0","buyname":"郭有超","buyphone":"15810757355","hhdanwei":"斤","hhid":"201800002","id":"2","userphone":"15810757355","price":"20元","name":"芒果","hhcstatue":"0","hhicon":"https://img12.360buyimg.com/n5/jfs/t19792/160/919182218/384699/e5d554f5/5ab074bbN95a0da9c.jpg","hhxsl":"0","hhinfo":"广西芒果，满足你的口味，好好品尝。"}]}
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


