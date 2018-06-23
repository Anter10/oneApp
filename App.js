import React from 'react';
import { Button, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator,NavigationActions, TabBarBottom,createStackNavigator, createTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Buy from './src/Buy'
import Seal from './src/Seal'
import Person from './src/Person'
import BuyMsg from './src/BuyMsg'
import Message from './src/Message'

import EditView from './src/edit/EditView'
import KaQuanView from './src/edit/KaQuanView'
import OrderView from './src/edit/OrderView'
import PersonView from './src/edit/PersonView'
import SealHh from './src/edit/SealHh'


let appNavRef;

const BuyStack = new StackNavigator({
  Buy: { screen: Buy },
  bNav: {screen: BuyMsg}
});

class Buyscr extends React.Component{
    render(){
        return (
            <BuyStack ref={navigatorRef => {
                window.BuyappNavRef = navigatorRef
            }} />
        );
    }
}

const SealStack = StackNavigator({
    Seal: { screen: Seal },
});


const MessageStack = StackNavigator({
    Message: { screen: Message },
});
 


const PersonStack = StackNavigator({
   Person: { screen: Person },
},{ navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, tintColor }) => {
         
        return '个人';
      },
    }),
  });


const TabBar = createTabNavigator(
  { 
    Buy: { screen: Buyscr ,navigationOptions:{tabBarLabel:'买东西'}},
    Seal: { screen: SealStack,navigationOptions:{tabBarLabel:'卖东西'} },
    Message: { screen: MessageStack,navigationOptions:{tabBarLabel:'消息'} },
    Person: { screen: PersonStack,navigationOptions:{tabBarLabel:'个人'} },
  },
   
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Buy') {
          iconName = `ios-flower${focused ? '' : '-outline'}`;
        } else if (routeName === 'Seal') {
          iconName = `ios-disc${focused ? '' : '-outline'}`;
        }else if (routeName === 'Person') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }else if (routeName === 'Message') {
          iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
        }


        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: true,
    
  }
);

 class TabScreen extends React.Component {
    static navigationOptions = {
           
           header:null,
           tabBarVisible:false,
           
   };

    render() {
        return (
            <TabBar />
        );
    }
}
 
const AppNav = new StackNavigator({
    tabNav: {screen: TabScreen},
    bNav: {screen: BuyMsg},
    person: {screen: PersonView},
    order: {screen: OrderView},
    sealhh: {screen: SealHh},
    kaquan: {screen: KaQuanView},
    edit: {screen: EditView},



});

class App extends React.Component {
    render() {
        return (
            //get the reference to the root navigator
            <AppNav ref={navigatorRef => {
                window.appNavRef = navigatorRef
            }}/>
        );
    }

}

export default App;


