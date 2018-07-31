import React from 'react'
import {Modal, ScrollView,Image,TextInput, Button,TouchableOpacity,Dimensions, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
import Swiper from 'react-native-swiper';
import Video from 'react-native-af-video-player';
// var InputNumber = require('rc-input-number');
 
let normalfontsize = 15;
let blackTitleSize = 14;
const {height, width} = Dimensions.get('window');
var scrollcaidan;
var preselectcaidan;
 
const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'

class HHimageView extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			height:1,
			width:1,
		}
	}
    _onLoadEnd(){
      Image.getSize(this.props.data.hhicon,(twidth,theight) =>{
      	let mywidth = twidth/width;
        // let myHeight =   theight/height;
        
        let myHeight = Math.floor(width/twidth*theight);
        
        this.setState({height:myHeight,width:width});
      });
    }
    componentDidMount(){
    	
    }
	render(){
		return(
			 <View style={{justifyContent:'center',alignItems:'center'}}>
             <Image resizeMode='contain' source={{uri:this.props.data.hhicon}} style={{width:this.state.width,height:this.state.height}}  onLoadEnd = {()=>this._onLoadEnd()} />             
		     </View>
		)
	}
}

class VideView extends React.Component{
	constructor(props){
	  	super(props);
	  	this.item = this.props.item;
	  	this.state = {
	         inputValue:1,
		}
		  
	  } 
	 inputAdd(){
  	   this.setState({inputValue:this.state.inputValue + 1})
     }
     inputCut(){
       var tsh = 1;
       if(this.state.inputValue <= 1){
         tsh = 0.1;
       }
       var number = this.state.inputValue - tsh;
       if(number <= 0){
       	 number = 1;
       }
  	   this.setState({inputValue:number})
     }
	 render(){
	 	return (
	 		 <View style={{height:35,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
	 		 <TouchableOpacity  onPress={this.inputCut.bind(this)} style={{backgroundColor:'#DA3749',marginRight:3,borderRadius:5,height:35,width:35,justifyContent:'center',alignItems:'center'}} >                       
			    <Ionicons  name="ios-remove" color="white" size = {36} />  
		     </TouchableOpacity>                           
             <Text   style={styles.inputText}  placeholderTextColor="darkgrey" onChangeText={(text) => {this.setState({inputValue:text})}}  keyboardType='numeric' >
			        <Text style={{justifyContent:'center',color:'red'}}>{this.state.inputValue.toFixed(1)} </Text>{this.item.hhdanwei} <Text style={{justifyContent:'center',color:'red'}}>{(this.item.price * this.state.inputValue).toFixed(1)}</Text>元
			 </Text>   
			 <TouchableOpacity style={{backgroundColor:'#106CD6',borderRadius:5,height:35,width:35,justifyContent:'center',alignItems:'center',marginLeft:3}} onPress={this.inputAdd.bind(this)}>                       
			 <Ionicons name="ios-add" color="white" size = {36}  /> 
               </TouchableOpacity>
             </View>
	 	)
	 }						       
}

export default class HHMsg extends React.Component {
  constructor(props){
  	super(props);
    const { navigation } = this.props;
    this.itemdata = navigation.getParam('item', 'NO-ID');

  	this.state = {
         inputValue:1,
	}
	  
  }
  componentDidMount() {
    
  }

  static navigationOptions = ({ navigation }) => {
		 return {
		    title: navigation.getParam('item', 'A Nested Details Screen')["name"],
		 };
   };
   space(){
	return(<View style={{height:0.5, flex:1, backgroundColor: 'gray'}}/>)
   };

    onRefresh(){
 
        }
         
        componentWillUnmount(){
        	 
        }

        componentWillMount(){
		     
		  }

	   componentWillUpdate(nextProps,nextState){

        }

	 

        _onEndReached(){
          alert("helloc");
        }

  okPress(){
     alert(this.itemdata.hhicon)
  }
  
  getSize(IMAGEURL){
      var {W,H} =  Image.getSize(IMAGEURL);
      return {W,H}
  }
  
  render() {
    return ( 
      <View style={styles.videocontainer}>
                   <View style={{flex:1,}}>
		                   <FlatList
					            data={[{},{},{}]}
					            ListHeaderComponent={()=> <View style={{flex:1,backgroundColor:'white'}}>
					                <Video inlineOnly={true} url={url} ref={(ref) => {this.video = ref }} />
					                <View style={{backgroundColor:"white",margin:5}}>
		                                    
		                                    <Text style={{marginTop:25,marginLeft:5,}}>
		                                           {this.itemdata.hhinfo}
		                                    </Text>
					                </View>

			                    </View>}
					            // ItemSeparatorComponent={this.space}
                                ListFooterComponent={()=> <View style={{flex:1,backgroundColor:'white',}}>
					                  {this.space}
					                  <Text style={{alignItems:'center',height:35,paddingTop:5, textAlign:'center',justifyContent:'center'}}>{this.itemdata.name}介绍完</Text>
			                    </View>} 
					            renderItem={({item}) =>
						            <View style={{backgroundColor:'white'}}>
						                  <HHimageView data={this.itemdata} />
						            </View> 
					            } 
					        />
                            
	                 </View>

			        <View style={{backgroundColor:'white',height:45,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}} >
			              <VideView style={{width:width/2,height:35}} item={this.itemdata}/>
						  <TouchableOpacity style={{width:width/3,marginRight:5,borderRadius:5,justifyContent:'center',height:35,backgroundColor:"forestgreen",marginBottom:0,alignItems:'center'}} onPress={this.okPress.bind(this)}>
                             <Text style={{color:'white',fontSize:16,}}>添加到购物车</Text>
                           </TouchableOpacity>
			        </View>

         
      </View>
    )
  }
}



const styles = StyleSheet.create({
  videocontainer: {
  	flex:1,
  	flexDirection: 'column',
    
    width:width,
    
  },
  inputText:{
  	borderWidth: 1,
  	fontSize:14,
  	textAlign:'center',
  	borderColor:"grey",
    paddingTop:8,
  	height:35,
  	borderRadius:5,
  	width:width-width/3 - 90,
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor:'white'
  }

})