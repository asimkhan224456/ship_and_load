import React,{useLayoutEffect}from 'react'
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'
import CustomerScreen from './CustomerScreen';
import CarrierScreen from './CarrierScreen';
import BrokerScreen from './BrokerScreen';



const Tab = createMaterialTopTabNavigator();
{/* it is the layeffect which are apply to screen after navigation  */}
const RegisterScreen = ({navigation}) => {
      useLayoutEffect(() => {
        navigation.setOptions({
            title: "Register",
            headerStyle: { backgroundColor: '#1A2230' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
        })
    }, [navigation]);

    return (
      <Tab.Navigator>
      <Tab.Screen name="Customer" component={CustomerScreen} 
       options={{
            tabBarLabelStyle: { fontSize: 15 },
              tabBarActiveTintColor:'white',
             tabBarStyle: { backgroundColor: '#27334F' },
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={24} color="white" />
          )
        }}/>
      <Tab.Screen name="Carrier" component={CarrierScreen}
       options={{
            tabBarLabelStyle: { fontSize: 15 },
             tabBarStyle: { backgroundColor: '#27334F' },
             tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="truck-check" size={24} color="white" />
          )
        }} />
       <Tab.Screen name="Broker" component={BrokerScreen} 
        options={{
             tabBarLabelStyle: { fontSize: 15},
              tabBarStyle: { backgroundColor: '#27334F' },
               tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="user-tie" size={24} color="white" />
          )
        }}/>
    </Tab.Navigator>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})
