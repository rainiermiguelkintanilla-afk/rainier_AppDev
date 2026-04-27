package com.kintanilla

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost

class MainApplication : Application(), ReactApplication {

  override val reactHost: ReactHost by lazy {
    getDefaultReactHost(
      context = applicationContext,
      packageList =
        PackageList(this).packages.apply {
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // add(MyReactNativePackage())
        },
    )
  }

  override fun onCreate() {
    super.onCreate()
    loadReactNative(this)
  }
}

import CustomCard from '../components/CustomCard';

import { Text, View, Alert } from 'react-native';
import CustomButton from './CustomButton';

const CustomCard = ({ label }) => {
    return (
        <View 
            style={{
                backgroundColor: 'white',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 20,
            }}
        >
            <Text classname="card-title">{label}</Text>
            <CustomButton
                label="Display Text"
                onPress={() => {
                    Alert.alert('Button Pressed');
                }}
            />
        </View>
    );
};

export default CustomCard;

<CustomCard label="Card 1" />


/*import {view, text, button} from 'react-native';

export default function ErrorScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: 'red' }}>Error Pre!!!</Text>
      <Button title="Uli Nako Sir!!" onPress={() => {}} />
    </View>
  );
}*/