import React, { Component } from 'react';
import { 
  Flatlist,
  View,
  Text,
 } from 'react-native';

 class Flatlayout extends Component {
   constructor(props) {
     super(props);
     state = { 
      data:[
        { backgroundColor:'tomato'}
        { backgroundColor:'steelblue'}
        { backgroundColor:'maroon'}
        { backgroundColor:'crimson'}
        { backgroundColor:'slateblue'}
      ],
    }
     
   }
   
  
   render() { 
     const {backgroundColor} = this.state
     return ( 
      <View>
         <Flatlist
          data = {this.state.data}
          renderItem={(item)=><Text style={{styles.text}}>{item.backgroundColor}</Text>}
         />
      </View>


      );
   }
 }
  
 const styles = StyleSheet.create ({
   text :{
     backgroundColor:backgroundColor
   }
 })
 export default Flatlayout;