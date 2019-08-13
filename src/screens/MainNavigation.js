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