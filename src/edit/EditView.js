import React from 'react'
import {TextInput,SectionList, Modal, Image, Button, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json


class EditHeader extends React.Component{
	render(){
		return (
           <View style={styles.editheader}>
                 <Text style={styles.editheadertitle}>FarmerApp</Text> 
                 <Text style={styles.editheadersubtitle}>一个为农民服务的App</Text> 
           </View> 
		)
	}
}

class EditSectionHeader extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:this.props.data,
		};
	}
	render(){
		return (
           <View style={styles.sectionheader}>
                 <Text>{this.state.data.title}</Text> 
           </View> 
		)
	}
}



class EditViewRow extends React.Component{
	constructor(props){
		super(props);
        
	}
	onPress(){
	
    }
	render(){
		return( 
		         <View>
			         <View style={{height:15, flex:1, backgroundColor: 'lightgray'}}/>
				     <TouchableHighlight style={{flex:1,height:40,}}>

				     <View  style={styles.editrow}>
				          <Text style={{marginLeft:5,}}>{this.props.item.title}</Text>
					 </View> 
					 </TouchableHighlight>
				 </View>
		   
		)
	}
}

export default class EditView extends React.Component{
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
           <View style={styles.flex}>
	          <SectionList
	              ListHeaderComponent={()=><EditHeader />}
				  renderItem={({item, index, section}) => <EditViewRow item={item} />}
				  // renderSectionHeader={({section: {title}}) => (
				  //    <EditSectionHeader data={{title:title}}/>
				  // )}
				  sections={[
				    {title: 'Title1', data: [{title:'关于'},{title:'检查更新'}]},
				  ]}
                  // ItemSeparatorComponent={this.space}
				  keyExtractor={(item, index) => item + index}
				/>
          </View>
		);
	}
}

//样式定义
const styles = StyleSheet.create({
  flex:{
  	flex:1,
  	marginTop:1,
  },
  editheader:{
  	flexDirection:'column',
  	height:120,
  	justifyContent:'center',
  	alignItems:'center',
    flex: 1,
    backgroundColor:'white',
  },
  editheadertitle:{
  	color:"black",
  	fontSize:18,
  	fontWeight:'bold',
  },
  editheadersubtitle:{
  	marginTop:15,
  	color:"black",
  	fontSize:12,
  	fontWeight:'bold',
  },
  sectionheader:{
  	flexDirection:'column',
  	height:30,
  	marginTop:2,
  	justifyContent:'center',
  	alignItems:'center',
    flex: 1,
    backgroundColor:'white',
  },
  editrow:{

  	flexDirection:'row',
  	height:40,

    justifyContent:'flex-start',
  	alignItems:'center', 
  	backgroundColor:'white',
  	
  }
   
});