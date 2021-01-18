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
  TextInput
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Input = ({placeholder , iconName , Top}) => {
  
  return (
    <View style={{  marginTop: 30  , flexDirection: 'row' , marginRight: 'auto' , marginLeft: 'auto'  }}  >

      <View style={{
        // alignSelf: 'center',
        // marginLeft: '40%',
        // shadowColor: "#D7EEFC",

        shadowColor: '##0892EF',
        // shadowColor: "#F9FCFF",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 40,
        width: 200,
        borderRadius: 40,
        position: 'relative',
        marginLeft: 40,
        marginTop: 10,
        zIndex: 0,
        backgroundColor: 'white'
      }}  >
        <TextInput
          style={{ marginLeft: 25 }}
          placeholder={placeholder}
          placeholderTextColor="grey"
        />
      </View>

      <View style={{
        shadowColor: "#0892EF",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        
        shadowRadius: 3.84,
        elevation: 15,
        height: 60,
        width: 60,
        borderRadius: 40,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 10,
        // marginLeft: 40,
        // marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'center'
      }} >
        <FontAwesome
          name={iconName}
          size={20}
          color="#0892EF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Input;
