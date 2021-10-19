import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input} from 'react-native-elements';
import { TextInput, Checkbox,Button} from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'
import CustomeLoginScreen from './CustomeLoginScreen';
import BrokerLoginScreen from './BrokerLoginScreen';
import CarrierLoginScreen from './CarrierLoginScreen';
import AdminScreen from './AdminScreen';


const Tab = createMaterialTopTabNavigator();

const LoginScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Welcome to Ship & Load",
            headerStyle: { backgroundColor: '#1A2230' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
        })
    }, [navigation]);
    return (
        <Tab.Navigator>
        <Tab.Screen name="customer" component={CustomeLoginScreen} 
         options={{
              tabBarLabelStyle: { fontSize: 10 },
                tabBarActiveTintColor:'white',
               tabBarStyle: { backgroundColor: '#27334F' },
            tabBarIcon: ({ color, size }) => (
              <Entypo name="user" size={20} color="white" />
            )
          }} />
          <Tab.Screen name="Carrier" component={CarrierLoginScreen}
       options={{
            tabBarLabelStyle: { fontSize: 10 },
             tabBarStyle: { backgroundColor: '#27334F' },
             tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="truck-check" size={20} color="white" />
          )
        }} />
       <Tab.Screen name="Broker" component={BrokerLoginScreen} 
        options={{
             tabBarLabelStyle: { fontSize: 10},
              tabBarStyle: { backgroundColor: '#27334F' },
               tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="user-tie" size={20} color="white" />
          )
        }}/>
  
        
      </Tab.Navigator>
       
    )
}

export default LoginScreen
{/* its is basic styleing apply to the Screen Componet */}
const styles = StyleSheet.create({})
