/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Input from './components/input';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const App = () => {
  return (
    <ScrollView>

      <View  >
        <Text style={{textAlign: 'center' , fontSize: 24, fontWeight: 'bold' , color :'grey' ,marginTop: 20 }} >Welcome Back</Text>
      </View>

      <View  >
        <Text style={{textAlign: 'center' , fontSize: 14 , color :'grey' ,marginVertical: 20 }} >Login to account</Text>
      </View>

      <View>
        <Input
          placeholder="UserName"
          iconName={"user-o"}
          Top={50}
        />
        <Input
          placeholder="Password"
          Top={50}
          iconName={"lock"}
        />
      </View>

      <View>
        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#0792EF', marginTop: 40, padding: 10, width: 150, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: 'white' }}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <View style={{ height: 2, width: '20%', backgroundColor: '#C7C7C7' }}  ></View>
        <Text style={{ color: 'grey', marginHorizontal: 10 }} >Or Sign In with</Text>
        <View style={{ height: 2, width: '20%', backgroundColor: '#C7C7C7' }}  ></View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }} >
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
          marginHorizontal: 20,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center'
        }} >
          <EvilIcons
            name="sc-facebook"
            size={28}
            color="#0792EF"
          />

        </View>

        <View style={{
          shadowColor: '##0892EF',
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
          justifyContent: "center"
        }} >
          <EvilIcons
            name="sc-twitter"
            size={28}
            color="#0792EF"
          />

        </View>
      </View>

      <View style={{flexDirection: 'row' , marginTop: 30 , justifyContent: 'center' }}>
        <Text style={{color: 'grey'}}>Don't have an account?  </Text>
        <Text style={{color:"#0792EF"}}  >Sign up here</Text>
      </View>

    </ScrollView>

  );
};

const styles = StyleSheet.create({

});

export default App;
