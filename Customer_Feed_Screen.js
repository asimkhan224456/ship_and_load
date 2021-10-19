import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import CutomerFindScreen from './CutomerFindScreen';
import CustomerNotificationScreen from './CustomerNotificationScreen';
import CutomerWatchelistScreen from './CutomerWatchelistScreen';
import CustomerAccountScreen from './CustomerAccountScreen';
import CutomerPostScreen from './CutomerPostScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';










const Tab = createBottomTabNavigator();


const Customer_Feed_Screen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            headerStyle: { backgroundColor: '#1A2230' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
            headerLeft:()=>(
              <View style={{flexDirection: 'row',alignItems:'center'}}>
                  <TouchableOpacity>
                       <MaterialCommunityIcons name="filter-variant-plus" size={24} color="white" />
                       </TouchableOpacity>
                       <Text style={{color:'white',alignItems:'center',marginRight:10,marginLeft:70}}>Ship & Load Logo</Text>
              </View>
            ),
            headerRight:()=>(
              <View>
                 <TouchableOpacity>
                       <MaterialCommunityIcons name="pin" size={24} color="white" />
                       </TouchableOpacity>
              </View>
            )
        })
    }, [navigation]);
    return (
        <NavigationContainer independent={true}>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Find') {
              iconName = focused
                ? 'search'
                : 'search';
            } else if (route.name === 'Notification') {
              iconName = focused 
              ? 'notifications-sharp'
              : 'notifications-sharp';
            }
            else if (route.name === 'Account') {
              iconName = focused 
              ? 'md-settings' 
              : 'md-settings';
            }
            else if (route.name === 'Watch List') {
              iconName = focused 
              ? 'bookmarks' 
              : 'bookmarks';
            }
            else if (route.name === 'Post') {
              iconName = focused 
              ? 'ios-add-circle-sharp' 
              : 'ios-add-circle-sharp';
            }
           
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'skyblue',
          tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle :{
               fontSize:15,
            }
        })}>
        
          <Tab.Screen name="Find" component={CutomerFindScreen}   />
          <Tab.Screen name="Watch List" component={CutomerWatchelistScreen}   options={{ headerShown: false }}/>
          <Tab.Screen name="Post" component={CutomerPostScreen}  options={{ headerShown: false }} />
          <Tab.Screen name="Notification" component={CustomerNotificationScreen}  options={{ headerShown: false }}/>
          <Tab.Screen name="Account" component={CustomerAccountScreen}  options={{ headerShown: false }}/>
    
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default Customer_Feed_Screen

const styles = StyleSheet.create({})
