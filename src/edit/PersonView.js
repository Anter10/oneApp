import React from 'react'
import {Modal, Image,  Platform,PixelRatio, View,TouchableHighlight,TouchableOpacity, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
import Picker from 'react-native-picker';

const os = Platform.OS;

let normalfontsize = 15;
let blackTitleSize = 14;
let common_url = 'http://172.20.10.4:8080/updata/';  //服务器地址
let token = '';   //用户登陆后返回的token
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



class Order extends React.Component{
	constructor(props){
		super(props);
        this.item = this.props.data;
        this.onPress.bind(this);
	}
  onPress(){ 
      
        const navigateAction = NavigationActions.navigate({
	            type: 'Navigation/NAVIGATE',
	            routeName: 'pev',
	            params: this.item,
	        });
	    global.appNavRef.dispatch(navigateAction);
	}
	render(){
		return (  
			 
          <TouchableOpacity style={{flex:1,height:55,}}  onPress={this.onPress.bind(this)}>
					    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}} >
                   <Text>{this.item.key}</Text> 
                   <Text>{this.item.key}</Text> 
              </View>
          </TouchableOpacity>
			 
		)
	}
}

class UserIcon extends React.Component{
    constructor(props){
       super(props);
       this.item = this.props.data;
       this.state = {
          avatarSource:"../.././personicon.png",
       }
       this.onPress.bind(this);
    }

   

     uploadImage(url,params,name){
      return new Promise(function (resolve, reject) {
          let formData = new FormData();
          for (var key in params){
              formData.append(key, params[key]);
          }
          let file = {uri: params.path, type: 'application/octet-stream', name: name};
          formData.append("file", file);
          fetch(common_url + url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'multipart/form-data;charset=utf-8',
                  "x-access-token": token,
              },
              body: formData,
          }).then((response) => response.json())
              .then((responseData)=> {
                  console.log('uploadImage', responseData);
                  resolve(responseData);
              })
              .catch((err)=> {
                  console.log('err', err);
                  reject(err);
              });
      });
  }
       
   selectVideoTapped() {
        const options = {
            
            title: '选择视频',
           cancelButtonTitle: '取消',
            takePhotoButtonTitle: '录制视频',
            chooseFromLibraryButtonTitle: '选择视频',
            mediaType: 'video',
            videoQuality: 'medium'
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            let source;
                alert(response.uri)
               //  if (Platform.OS === 'android') {
               //      source = {uri: response.uri, isStatic: true}
               //  } else {
               //      source = {uri: response.uri.replace('file://', ''), isStatic: true}
               //  }

 


               //  let file;
               //  if(Platform.OS === 'android'){
               //      file = response.uri
               //  }else {
               //      file = response.uri.replace('file://', '')
               //  }

               //  let params = {
               //      userId:'abc12345',   //用户id
               //      path:file    //本地文件地址
               //  }
               
               // this.uploadImage('uppng.jsp?has=1',params,"name.mp4" );
            // else {
            //     this.setState({
            //         videoSource: response.uri
            //     });
            // }
        });
    }
 
      selectPhotoTapped() {
        const options = {
            title: '上传头像', 
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照', 
            chooseFromLibraryButtonTitle: '选择照片', 
            
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high', 
            durationLimit: 10, 
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8, 
            angle: 0,
            allowsEditing: false, 
            noData: false,
            storageOptions: {
                skipBackup: true  
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                let source;

                if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true}
                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true}
                }




                let file;
                if(Platform.OS === 'android'){
                    file = response.uri
                }else {
                    file = response.uri.replace('file://', '')
                }

                let params = {
                    userId:'abc12345',   //用户id
                    path:file    //本地文件地址
                }
               
               this.uploadImage('uppng.jsp?has=1',params );
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    onPress(){ 
           // const navigateAction = NavigationActions.navigate({
           //      type: 'Navigation/NAVIGATE',
           //      routeName: this.item.name,
           //      params: this.item,
           //  });
           //  // alert(global.BuyappNavRef.push)
           //  global.appNavRef.dispatch(navigateAction)

    }
 
    render(){ 
        return(
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',height:120,}}  onPress={this.selectPhotoTapped.bind(this)}>
                  <Image source={require('../.././iconshi.png')} style={{height:100,width:100,borderRadius:50}} />
            </TouchableOpacity>
        )
    }
}



export default class PersonView extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        avatarSource: null,
        videoSource: null
      };
    }

    
 
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
			            {key: '姓名',value:1,dw:'元',spname:'花椒'},
			            {key: '年龄',value:2,dw:'元',spname:'花椒'},
			            {key: '性别',value:3,dw:'元',spname:'花椒'},
			            // {key: '位置',value:4,dw:'元',spname:'花椒'},
                  {key: '收获地址',value:5,dw:'元',spname:'花椒'},
			          ]}
                 ListHeaderComponent={()=><UserIcon parent={this}/>}
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
    height:45,
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


