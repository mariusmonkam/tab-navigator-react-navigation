# tab-navigator-react-navigation
this is a starter page of native app with 3 screen implement with react-navigation 
These are the steps to follow to setup your react-native app project.
#H2 Initializing The project
1. `react-native init Project_Name`
2. `cd Project_Name `
3. `react-native start`
4. `react-native run-android`

At this point you are ready to start your app is ready to go , in case you are not familliar with the intallation of react-native project please
refere to the doccumentation [React-native cli Quick start or Expo cli Quickstart ](https://facebook.github.io/react-native/docs/getting-started
"react-native getting start") 
***
##H2 Installing react-navigation dependency

5. `npm install --save react-navigation` or `yarn add react-navigation` I myself prefere using yarn.
If you are not familiar with react-navigation installation please refere to the documentation 
[react-navigation doc ]("https://reactnavigation.org/docs/en/getting-started.html") 
6. `npm install --save react-native-gestures-handler` or `yarn add react-native-gesture-handler`
if you are not familliar to react-native-gesture-handler please refere to the doc 
[react-native-gesture-handler Getting-started ]("https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html")
Some time you may be require to link the dependency use `react-native link react-native-gesture-handler` , 
but in most case for react-native >= v60 is not necessary because is automaticaly linked.

***

Now that you are ready to start codiding , the manual approche for me is the best but you can also clone the entire project 

7.In the rooth folder of the app 
..*create a `src` folder 
..*Inside `src` folder create `screens` folder
..*Inside `screen`folder create 3 javascripts files and name them `Screen1`,`Screen2`,`Screen3`.
..*Still inside `screens folder `, create a javascript file and name it `MainNavigation.js` this can also be created out of the screens folder

8.Inside Screen1.js copy and past the following code 
```javascript
import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Screen1 extends Component {

  render() {
    return (
      <View style={styles.container}>
      //your content can goes here
        <Text>Screen 1</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0'
  }
});

```
Do the same with `Screen2` and `Screen3` by just changing the name `Screen1`

9.Inside MainNavigator copy and past the following code

``` javascript
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

const screens = {
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      tabBarLabel: 'Screen1',
    },
    
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      tabBarLabel: 'Screen2',
    },
  },
  Screen3:{
    screen:Screen3,
    navigationOptions: {
      tabBarLabel: 'Screen3',
    },
  }
}

const config = {
  headerMode: 'none',
  initialRouteName: 'Screen1',
  tabBarPosition: 'bottom', // <- add this line here
  
}

const MainNavigator = createMaterialTopTabNavigator(screens,config);

const AppContainer = createAppContainer(MainNavigator)

export default AppContainer;
```
10.Inside `App.js`
copy an past the following code 
```javascript
import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import AppContainer from './src/screens/MainNavigation';
//if you get a yellow warning telling you that concerning ViewPagerAndroid import the `{YellowBox}`
//`'react-native '`and add it in the code like on line `130`
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
```
Now you are ready to take your app to the next level this is how it look
![alt text](https://github.com/MariusMonkam/tab-navigator-react-navigation/blob/master/Screenshot_2019-08-13-07-00-42.png "3 screens react-navigation")

