import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetLogin } from '../app/reducers/auth';
import CustomWerpa from '../components/CustomWerpa';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();0
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../../assets/app_icon.png')}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
        }}
      />
      <Text>HomeScreen</Text>
      
        <CustomWerpa label="Custom Werpa" />

      <TouchableOpacity
        onPress={() => {
          dispatch(resetLogin());
        }}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: 'green',
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 40, color: 'white' }}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
