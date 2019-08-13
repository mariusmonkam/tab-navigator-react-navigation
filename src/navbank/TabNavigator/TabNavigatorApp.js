import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import AppContainer from './src/screens/MainNavigation';
import { YellowBox } from 'react-native';

export default class App extends Component {

 
  
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <AppContainer />
      </SafeAreaView>
    )
  }
}
YellowBox.ignoreWarnings(['ViewPagerAndroid']);