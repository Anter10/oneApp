import React from 'react'
import {Modal, ScrollView,Image,TextInput, Button,TouchableOpacity,Dimensions, View,TouchableHighlight, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
import Swiper from 'react-native-swiper';


let normalfontsize = 15;
let blackTitleSize = 14;
const {height, width} = Dimensions.get('window');
var scrollcaidan;
var preselectcaidan;



class SearchBar extends React.Component{
	render(){
		return (
            <Text style={{color:'red'}}>Hello Whater </Text>
		)
	}
}


class SwipItem extends React.Component{
	constructor(props){
		super(props);
		this.item = this.props.itemdata;
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
			 <Text style={{}} onPress={this.onPress.bind(this)}>
			    
	             <Image style={styles.swapitem} source={{uri:this.item.png}} />
	         </Text>                                
        )
	}
};


class BuyItem extends React.Component{
	constructor(props){
	   super(props);
	   this.item = this.props.data;
	   this.haohuo = this.props.hh;
       this.onPress.bind(this);
	}
	componentDidMount(){
	    navigator.geolocation.getCurrentPosition(
	      (position) => {
	        var initialPosition = JSON.stringify(position);
	        
	        this.setState({initialPosition});
	      },
	      (error) => alert(error.message),
	      {enableHighAccuracy: true, timeout: 2000000, maximumAge: 1000}
	    ); 
	    this.watchID = navigator.geolocation.watchPosition((position) => {
	      var lastPosition = JSON.stringify(position);
	      // 获得地理位置信息
	      
	    })
	  }

	onPress(){ 
      
        const navigateAction = NavigationActions.navigate({
	            type: 'Navigation/NAVIGATE',
	            routeName: 'hhmsg',
	            params: {item:this.item},
	        });
	        // 读取
	       
           global.appNavRef.dispatch(navigateAction);
	}
 
	render(){
		return(
            <TouchableOpacity style={{flex:1}}  onPress={this.onPress.bind(this)}>
			        <View style={styles.row} >
  	            <Image style={styles.thumb} source={{uri:this.item.hhicon}} />
  				      <View style={styles.leftpart}>
        					  <View style={styles.column} >
        		                    <Text style={styles.item}>货物:<Text style={styles.nameitem}> {this.item.name}</Text> </Text>
        		                    <Text style={styles.item}>价格:<Text style={styles.nameitem}> {this.item.price} / {this.item.hhdanwei}</Text> </Text>
        					  </View>
        				</View>
        		    </View>
		       </TouchableOpacity>
		)
	}
}

class AddModel extends React.Component{
	constructor(props){
         	super(props);
         	this.state = {
			    modalVisible: false,
			};
     }
     setModalVisible(visible) {

		 this.setState({modalVisible: visible});
	 }

     render(){
     	return(
           <View>
             <Modal
			 animationType="slide"
			          transparent={false}
			          visible={this.state.modalVisible}
			          onRequestClose={() => {
			            alert('Modal has been closed.');
			          }}>
			          <View style={{marginTop: 22}}>
			            <View>
			              <Text>Hello World!</Text>

			              <TouchableHighlight
			                onPress={() => {
			                  this.setModalVisible(!this.state.modalVisible);
			                }}>
			                <Text>Hide Modal</Text>
			              </TouchableHighlight>
			            </View>
			          </View>
			  </Modal>
			 
           </View>
     	)
     }
}

class CaiDanItem extends React.Component{
   constructor(props){
   	  super(props);
      this.state={
      	bgc:'white',
      	showc:'black',
      }
   } 
   
   onPress(){
   	  if(preselectcaidan != null){
   	  	preselectcaidan.setState({bgc:"white",showc:'black',})
   	  }
      this.setState({bgc:"#F5F5F5",showc:'red',})
   	  this.props.parent.showSc(this.props.data.tindex);
   	  preselectcaidan = this;
   }
   componentDidMount(){
   	  if(preselectcaidan == null){
   	  	preselectcaidan = this;
   	  	preselectcaidan.setState({bgc:"#F5F5F5",showc:'red',})
   	  }
   }

   componentWillDidMount(){
	 // if(preselectcaidan == null){
  //  	  	preselectcaidan = this;
  //  	  	preselectcaidan.setState({bgc:"lightgray"})
  //  	  }
  preselectcaidan = null;
   }

   render(){
   	  return( 
   	     <View style={{backgroundColor:this.state.bgc}}>
	   	     <TouchableOpacity style={{height:40,alignItems:'center',justifyContent:'center', width:width/5,}} onPress={this.onPress.bind(this)}>
	                 <Text style={{fontSize:16,color:this.state.showc}}>{this.props.data.name}</Text>
	   	     </TouchableOpacity>
	   	     <View style={{backgroundColor:'white',height:40,width:1}}>

	   	     </View>
   	     </View>
   	  )
   }
  
}
            
export default class Buy extends React.Component{
        constructor(props){
         	super(props);
         	this.state = {
         		caidans:[{name:"蔬菜",key:1001,tindex:1},{name:"水果",key:1002,tindex:2},{name:"肉类",key:1003,tindex:3},{name:"活物",key:1004,tindex:4},{name:"水货",key:1005,tindex:5},{name:"坚果",key:1006,tindex:6},{name:"坚果",key:1006,tindex:7},,{name:"坚果",key:1006,tindex:8},,{name:"坚果",key:1006,tindex:9}],
         		buy:[{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800001","id":"1","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"柑橘","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img13.360buyimg.com/n5/jfs/t20263/275/220661666/219832/deddf40a/5b04c440Nea327bb9.jpg","hhxsl":"0","hhinfo":"云南柑橘 好吃美味 酸甜可口。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800002","id":"2","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"芒果","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img12.360buyimg.com/n5/jfs/t19792/160/919182218/384699/e5d554f5/5ab074bbN95a0da9c.jpg","hhxsl":"0","hhinfo":"广西芒果，满足你的口味，好好品尝。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800003","id":"3","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"火龙果","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img14.360buyimg.com/n5/jfs/t17986/192/1980289952/419161/99cec6a3/5ae01d05N719265bf.jpg","hhxsl":"0","hhinfo":"富源火龙果，心红可爱，好吃不满足。"},{"totalseal":"100","addtime":"20180624","sealphone":"15810757355","hhid":"201800005","id":"5","hadseal":"0","sealstatue":"0","userphone":"15810757355","price":"20","name":"百香果","hhcstatue":"0","hhdanwei":"斤","hhicon":"https://img14.360buyimg.com/n5/jfs/t19624/318/1980650436/365806/9fd3faed/5ae27b10Nc5e2f5ba.jpg","hhxsl":"0","hhinfo":"泰国进口百香果 24个 单果约80g-100g 水果"}],
         		modalVisible: false,
         		refreshing:false,
         		isLoading: true,
			      showtitlepngs:[{png:"https://www.missfresh.cn/statics/img/snacks-banner.jpg"},{png:"https://www.missfresh.cn/statics/img/light-banner.jpg"},{png:"https://www.missfresh.cn/statics/img/veg-banner.jpg"}]
          }
         }
     	 
     	

		 static navigationOptions = {
	       header:null,
	    }
 
        showSc(itemindex){
        	const itemslength = this.state.caidans.length;
        	

            if(itemindex <=  3){
            	scrollcaidan.scrollTo(0,0);
            }else if(itemindex >= itemslength - 3){
            	scrollcaidan.scrollToEnd();
            }else{
            	scrollcaidan.scrollTo(0,(itemindex - 3) * (width / 5));
            }
        	
        }
	    _handlerPress = () => {
            //handle navigation
	        const navigateAction = NavigationActions.navigate({
	            type: 'Navigation/NAVIGATE',
	            routeName: 'bNav',
	            params: {},
	        });
            
	        global.appNavRef.show(navigateAction)
	    };
		space(){
		    return(<View style={{height:0.5, flex:1, backgroundColor: 'gray'}}/>)
		};

		renderPagination(a, b,c){

		}

		showCaiDan(){
			return(
                this.state.caidans.map((data) => 
                  <CaiDanItem data={data} parent = {this} > </CaiDanItem>
                )
			)
		}
        onRefresh(){
 
        }
        componentDidMount(){
        	 
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
        render(){
        	const { navigation } = this.props;
	     	const otherParam = navigation.getParam('name', '传过来的名字');
	        return(
	             <View style={styles.container}>
	                 
                      <FlatList
			            data={this.state.buy}
			            onRefresh={this.onRefresh.bind(this)}
                        refreshing={this.state.refreshing}
                        onEndReached={() => this._onEndReached.bind(this)}
    					onEndReachedThreshold={1}
    					ListEmptyComponent ={
                        () => 
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                              <Text  style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:height/3,fontSize:16}}>附近没有该类型的商品哦。</Text>
                        </View>
                        }
			            ListHeaderComponent={()=> <View >
			              <View style={styles.wrapper}>
		                  <Swiper dot={<View style={{
							    backgroundColor: 'lightblue',
							    width: 6,
							    height: 6,
							    borderRadius:3,
							    marginLeft: 10,
							    marginRight: 9,
							    marginTop: 9,
							}}/>}  activeDot={<View style={{
							    backgroundColor: 'red',
							    width: 20,
							    height: 2,
							    marginLeft: 10,
							    marginRight: 9,
							    marginTop: 9,
							}}/>} showsButtons={false}  showsButtons={false} paginationStyle={{bottom:6}} autoplay={true}  autoplayTimeout={5} > 
						          <SwipItem itemdata={this.state.showtitlepngs[0]} />
						          <SwipItem itemdata={this.state.showtitlepngs[1]} />
						          <SwipItem itemdata={this.state.showtitlepngs[2]} />

						  </Swiper>

						  <TextInput style={styles.searchInput} placeholderTextColor="gray" placeholder="输入农产品名称搜索" >
	                                    
						  </TextInput>
						  </View>

					  
                         <View style={{flex:1,height:40,backgroundColor:'white',marginTop:0,paddingTop:0,}}>
								<ScrollView contentContainerStyle={styles.contentContainer} scrollEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} ref={caidan => {
                                   scrollcaidan = caidan
                                }} >
		                            {this.showCaiDan()}
		                       </ScrollView>
                         </View>
					   
					  </View>}
			          ItemSeparatorComponent={this.space}

			          renderItem={({item}) =>
			           <View style={styles.row}>
			                 <BuyItem data={item} hh={item.hh} />
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
   wrapper: {
   	width:width,
  	height:180,
  },
  contentContainer: {
   

  },
 
  swapitem: {
  	  flex:1,
  	  height:180,
  	  width:width,
  	  maxWidth:width,
      justifyContent: 'center',
      alignItems: 'center',
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

  },
  searchbar:{
  	  flex:1,
  	  flexDirection: 'row',
  	  width:width,
  	  height:40,
      backgroundColor:'white',
  },
  searchInput:{
  	  justifyContent:'flex-end',
  	  alignItems:'flex-end',
      width:width-80,
      position:'absolute',
      top:2,
      borderRadius:15,
      height:30,
      paddingLeft:15,
      marginTop:15,
      marginLeft:40,
      opacity:0.9,
      borderColor:'gray',
      backgroundColor:'white',
  }


})


