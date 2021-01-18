/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


const SocialBox = () => {
  return (
    
     
  
    <View style={{
      shadowColor: '#0892EF',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height: 40,
      width: 70,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <EvilIcons
        name="sc-google-plus"
        size={28}
        color="#0792EF"
      />
    </View>
    

    
  

  );
};



export default SocialBox;
