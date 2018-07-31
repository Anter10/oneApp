import React from 'react'
import {Image, Button, View,Dimensions,TouchableHighlight,TouchableOpacity, Text,AppRegistry, FlatList, StyleSheet} from 'react-native'
import {  NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
import CheckBox from 'react-native-checkbox';
 const {height, width} = Dimensions.get('window');


let normalfontsize = 15;
let blackTitleSize = 14;
let totalselectnum = 0;
let currentnode = null;
let allcartitem = new Array();
let totalselecteditem = new Array();

class BuyItem extends React.Component{
    constructor(props){
       super(props);
       allcartitem[allcartitem.length] = this;
       this.item = this.props.data;

       this.onPress.bind(this);
       this.paren = this.props.parent;
       this.state = {
            allselect:false,
        }
    }

    getPrice(){
      return this.item.price * this.item.xdnum;
    }

    onPress(){ 
       const navigateAction = NavigationActions.navigate({
                type: 'Navigation/NAVIGATE',
                routeName: 'bNav',
                params: this.item,
            });

        global.appNavRef.dispatch(navigateAction);
    }
    onChange(checked){
       if(!checked ){
          totalselectnum = totalselectnum + 1;
          currentnode.setTotalFee(this.item.price * parseFloat(this.item.xdnum))
       }else{
          totalselectnum = totalselectnum - 1;
          currentnode.setTotalFee(-this.item.price * parseFloat(this.item.xdnum))
       }
       if(totalselectnum < 0){
          totalselectnum = 0;
       }
       currentnode.setTotalsnum(totalselectnum)
        
       this.setState({allselect:!checked});
    }

    totalCall(checked){
       this.setState({allselect:!checked});
    }

    render(){ 
        return( 
           
                <TouchableOpacity style={{flex:1,height:120,}}  onPress={this.onPress.bind(this)}>
                     
                     <View style={styles.column}>
                          <CheckBox
                                  label=''
                                  style={{width:40,height:40}}
                                  checked={this.state.allselect}
                                  onChange={this.onChange.bind(this)}
                                />      
                          <View style={styles.buyitemrow} >
                                 <Image style={styles.cartimage} source={{uri:this.item.hhicon}}/>
                                 <View style={{ flexDirection:"column",marginLeft:15,}}>
                                       <Text style={{width:width-140, maxHeight:55}}>{this.item.hhinfo}</Text>
                                       <Text style={styles.info}>{this.item.name},{this.item.xdnum}{this.item.hhdanwei}<Text style={styles.price}>({this.item.price}/{this.item.hhdanwei})</Text></Text>
                                 </View>
                           </View>
                     </View>
               </TouchableOpacity>
            
        )
    }
}

export default class Cart extends React.Component{
        constructor(props){
            super(props);
            currentnode = this;
            this.state = {
                allselect:false,
                totalsnum:0,
                totalfee:0,
                cart:[],
                totalselect:false,
            }
         }

        setTotalsnum(num){
            this.state = {
                allselect:this.state.allselect,
                totalfee:this.state.totalfee,
                cart:[],
                totalselect:this.state.totalselect,
                totalsnum:num,
            }
            this.setState(this.state)
        }

        setTotalFee(fee){
            this.state = {
                allselect:this.state.allselect,
                totalselect:this.state.totalselect,
                totalfee:this.state.totalfee + parseFloat(fee),
                totalsnum:this.state.totalsnum,
                cart:[],
            }
            // alert(parseFloat("20"));
            this.setState(this.state)
        }

        totalSelect(){
           const qx = !this.state.totalselect;
            var total = 0;
            for (var i = allcartitem.length - 1; i >= 0; i--) {
               total = total + parseFloat(allcartitem[i].getPrice());
            }
            totalselectnum = qx?allcartitem.length:0;
            this.state = {
                allselect:this.state.allselect,
                totalselect:qx,
                totalfee:qx?total:0,
                cart:[],
                totalsnum:qx?allcartitem.length:0,
            }
            this.setState(this.state)
            for (var i = allcartitem.length - 1; i >= 0; i--) {
               allcartitem[i].totalCall(!qx)
            }
        }
         
        static navigationOptions = {
           header:null,
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
        onChange(checked){
          this.setState({allselect:!checked});
        }
        clear(){

        }

        jiesuanCall(){

        }
        render(){
            const { navigation } = this.props;
            const otherParam = navigation.getParam('name', '传过来的名字');
            var headerview = (<View> </View>)
            if(this.state.cart.length > 0){
              headerview = (<View style={styles.jsbottom}>
                          <View style={styles.jsbottombuts}>
                             <TouchableHighlight onPress={this.jiesuanCall} ><View style={{backgroundColor:'red', justifyContent:'center', alignItems:'center',height:65,paddingTop:30,width:width/2,borderRadius:0,marginLeft:0}}><Text  style={{color:'white'}}>结算({this.state.totalfee} 元)</Text></View></TouchableHighlight>
                             // <Text style={{color:'red',marginTop:5}}></Text>
                             <View style={{flexDirection:'row',marginRight:0,}}>
                                   <TouchableHighlight onPress={this.clear.bind(this)}><View  style={{backgroundColor:'grey', justifyContent:'center', alignItems:'center',height:65,paddingTop:30,width:width/2-80,borderRadius:0,}}><Text  style={{color:'white'}}>清空({this.state.totalsnum})</Text></View></TouchableHighlight>
                                   <TouchableHighlight onPress={this.totalSelect.bind(this)}><View style={{backgroundColor:'dodgerblue', justifyContent:'center', alignItems:'center',height:65,paddingTop:30,width:80,borderRadius:0,}}><Text style={{color:'white',fontSize:14}}>{this.state.totalselect?"取消全选":'全选'}</Text></View></TouchableHighlight>
                             </View>
                          </View>
                    </View>)
            }
            return( 
                 <View style={styles.container}>
                    {headerview}
                    <FlatList style={{marginTop:60}}
                      data={this.state.cart}
                      ListEmptyComponent ={
                        () => 
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                              <Text  style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:height/2,fontSize:16}}>购物车没有东西哦。</Text>
                        </View>
                      }
                      ItemSeparatorComponent={this.space}
                      renderItem={({item}) =>
                       <View style={styles.row}>
                             <BuyItem data={item} parent={this} />
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
    paddingLeft:0,
    paddingRight:0,
    height:120, 
    backgroundColor: '#F6F6F6',
    justifyContent:'flex-start',
  },
  buyitemrow: {
    flexDirection: 'row',
    paddingLeft:0,
    paddingRight:0,
    marginLeft:5,
    backgroundColor: '#F6F6F6',
    alignItems:'center',
    justifyContent:'flex-start',
  },
  column: {
    flexDirection: 'row',
    paddingLeft:5,
    paddingRight:20,
    marginRight:15,
    height:120, 
    alignItems:'center',
    backgroundColor: '#F6F6F6',
    justifyContent:'flex-start',
  },
  showtitle:{
    position:'absolute',
  },
  cartimage:{
     height:80,
     width:80,
     marginLeft:5,
  },
  info:{
     marginTop:15,
     color:'red',
     fontSize:14,
     marginBottom:10,
     
     borderRadius:35,
  },
  price:{
     fontSize:12,
     
     color:'red',
    
  },
  userphone:{
    position:'absolute',
    marginLeft:25,
    marginTop:5,
    color:'grey',
    fontSize:12,

  },
  jsbottom:{
    flex:1,
    width:width,
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:0,
    flexDirection:'row',
    height:40,

    position:'absolute',
    backgroundColor:'lightgrey',
    justifyContent:'space-between',
  },
  jsbottombuts:{
    flex:1,
   
    flexDirection:'row',
    justifyContent:'space-between',
  }
  

})


