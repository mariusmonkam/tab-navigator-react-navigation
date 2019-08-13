import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component{
  render(){
    return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>  
    <Button
     title="go to detail"
     onPress={()=>this.props.navigation.navigate('Details')}
     color='tomato'
    />
      
</View>
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
         {/*  Untuk pindah halaman*/}
        <Button
          title="go to home"
          onPress={() => this.props.navigation.navigate('Home')}
          color='green'
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home:HomeScreen,
    Details:DetailsScreen
  },
  {
    initialRouteName:'Home',
  }
)


const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component{
  render(){
    return <AppContainer />
  }
}