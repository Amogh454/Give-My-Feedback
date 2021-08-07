import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import WriteComplaint from './screens/WriteComplaint'
import ReadComplaint from './screens/ReadCompaint'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
      <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  'Write Complaint': WriteComplaint,
  'Read Complaint': ReadComplaint
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write Complaint"){
        return(
          <Image
          source={require("./assets/complaint.webp")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Read Complaint"){
        return(
          <Image
          source={require("./assets/readC.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
