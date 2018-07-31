import React from 'react'
import {TextInput,SectionList,Dimensions, Modal,TouchableOpacity, Image, Button, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
import Picker from 'react-native-picker';
import SegmentedControlTab from 'react-native-segmented-control-tab'


const selectsex = [];

const {height, width} = Dimensions.get('window');
var pickershow = false;
export default class PersonEditView extends React.Component{
	constructor(props){
		super(props);
		pickershow = false;
		const { navigation } = this.props;   
        this.getvalue = navigation.getParam('value', 1) 
        this.state={
        	value:"",
        }
        this.editplaceholder = "";
        if(this.getvalue === 1){
           this.editplaceholder="请输入名字."
    	}else if(this.getvalue === 2){
           this.editplaceholder="请输入年龄."
    	}else if(this.getvalue === 3){
           this.editplaceholder="请输入性别."
    	}else if(this.getvalue === 4){
           this.editplaceholder="请输入位置."
    	}
    	
	} 
 
	static navigationOptions = ({ navigation }) => {
	   return {
		 title: navigation.getParam('key', 'A Nested Details Screen'),
	   };
	}; 

	componentDidMount() {
        this.show();   
    }

    componentWillUnmount() {
       pickershow = false;
       Picker.hide();
    }

   getInitialState(){
     alert("ddd")
    
   }
    show(){
    	if(this.getvalue === 2 || this.getvalue === 3){
    		selectsex = [];
    	    selectedValue = ""
    	    pickerTitleText="请选择"
    	    if(this.getvalue === 2){
				for(var i=6;i<120;i++){
				    selectsex.push(i);
				}
				pickerTitleText="请选择年龄"
				selectedValue = [25];
            }else if(this.getvalue === 3){
                selectsex = ['男','女'];
				selectedValue = ["男"]
				pickerTitleText="请选择性别"
            }
		    Picker.init({
			    pickerData: selectsex,
			    isLoop:true,
			    selectedValue: selectedValue,
			    pickerTitleText:pickerTitleText,
			    onPickerConfirm: data => {
			        this.setState({
			        	value:data,
			        })
			        pickershow = false;
			    },
			    onPickerCancel: data => {
			        console.log(data);
			        pickershow = false;
			    },
			    onPickerSelect: data => {
			        console.log(data);
			        pickershow = false;
			    }
			});
			
			if(pickershow === false){
			   Picker.show(); 
			   pickershow = true;
			}
		    

    	     
		   
    	}
    }
    
    okPress(){
    	  
    	 	this.show();   
    	 
    	 
    }

    render(){
    	const curstatue = this.getvalue; 
    	var editplaceholder = "";
    	var value;
        if(this.getvalue === 1){
           value = (<View style={{flex:1,margin:0,flexDirection:'column',justifyContent:'space-between',}} >
                  <TextInput style={styles.inputText} placeholderTextColor="darkgrey" placeholder={this.editplaceholder} >
	                             
	              </TextInput> 
	                  
                  
                  <TouchableOpacity style={{borderRadius:0,justifyContent:'center',height:40,backgroundColor:"forestgreen",marginBottom:0,alignItems:'center'}} onPress={this.okPress.bind(this)}>
                             <Text style={{color:'white',fontSize:16,}}>确定</Text>
                  </TouchableOpacity>

            </View>)
    	}else if(this.getvalue === 2){
           value = (<View style={{flex:1,margin:10,flexDirection:'column',justifyContent:'space-between'}} >
                  <View style={{flexDirection:'row',width:width,flex:1 ,height:35,justifyContent:'center',}}>
		                  <Text style={{borderWidth: 1, flexDirection:"row",justifyContent:'space-between',fontSize:16,alignItems:'center', paddingTop:7, borderColor:"grey",height:35,borderRadius:5,backgroundColor:'white',width:width-70}} onPress={this.okPress.bind(this)} placeholderTextColor="darkgrey" placeholder={this.editplaceholder} >
		                  		<Text>{this.state.value}</Text>
		                  			 
		                  </Text> 
                          <Button title="选择" onPress={this.okPress.bind(this)}></Button>
                  </View>

                  <TouchableOpacity style={{borderRadius:0,justifyContent:'center',height:40,backgroundColor:"forestgreen",marginBottom:0,alignItems:'center'}} onPress={this.okPress.bind(this)}>
                             <Text style={{color:'white',fontSize:16,}}>确定</Text>
                  </TouchableOpacity>
            </View>)
    	}else if(this.getvalue === 3){
            value = (<View style={{flex:1,margin:15,flexDirection:'column',justifyContent:'space-between'}} >
                  <View style={{flexDirection:'row',width:width,flex:1 ,height:35}}>
		                  <Text style={{borderWidth: 1,flexDirection:"row",justifyContent:'space-between',fontSize:16,alignItems:'center', paddingTop:7,paddingLeft:5,  borderColor:"grey",height:35,borderRadius:5,backgroundColor:'white',width:width-70}} onPress={this.okPress.bind(this)} placeholderTextColor="darkgrey" placeholder={this.editplaceholder} >
		                  			  <Text>{this.state.value}</Text>
		                  			 
		                  </Text> 
                          <Button title="选择"  onPress={this.okPress.bind(this)}></Button>
                  </View>

                  <TouchableOpacity style={{borderRadius:5,justifyContent:'center',height:40,backgroundColor:"forestgreen",marginBottom:0,alignItems:'center'}} onPress={this.okPress.bind(this)}>
                             <Text style={{color:'white',fontSize:16,}}>确定</Text>
                  </TouchableOpacity>
            </View>)
    	}else if(this.getvalue === 4){
           value = (<View style={{flex:1,margin:0,flexDirection:'column',justifyContent:'space-between'}} >
                 <TextInput style={styles.inputText} placeholderTextColor="darkgrey" placeholder={this.editplaceholder} >
                       
                  </TextInput> 
                  <TouchableOpacity style={{borderRadius:0,justifyContent:'center',height:40,backgroundColor:"forestgreen",marginBottom:0,alignItems:'center'}} onPress={this.okPress.bind(this)}>
                             <Text style={{color:'white',fontSize:16,}}>确定</Text>
                  </TouchableOpacity>
            </View>)
    	}else if(this.getvalue === 5){
           value = (<View style={{flex:1,margin:0,flexDirection:'column',justifyContent:'space-between'}} >
                  <FlatList
			            data={this.state.buy}
			      //       onRefresh={this.onRefresh.bind(this)}
         //                refreshing={this.state.refreshing}
         //                onEndReached={() => this._onEndReached.bind(this)}
    					// onEndReachedThreshold={1}
    					ListEmptyComponent ={
                        () => 
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                              <Text  style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:height/3,fontSize:16}}>您还没有添加收获地址</Text>
                        </View>
                        }
			            
			           ItemSeparatorComponent={this.space}

			          renderItem={({item}) =>
			           <View style={styles.row}>
			                 // <BuyItem data={item} hh={item.hh} />
			           </View>
			          }
			        />
                  <TouchableOpacity style={{borderRadius:0,justifyContent:'center',height:40,backgroundColor:"forestgreen",marginBottom:0,alignItems:'center'}} onPress={this.okPress.bind(this)}>
                             <Text style={{color:'white',fontSize:16,}}>新增收获地址</Text>
                  </TouchableOpacity>
            </View>)
    	}
		return value;
	}
}

const styles = StyleSheet.create({
   inputText:{borderWidth: 1,fontSize:16,borderColor:"grey",margin:15, height:35,borderRadius:5,backgroundColor:'white'}
});
























