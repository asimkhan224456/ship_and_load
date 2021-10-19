import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,SafeAreaView, ScrollView} from 'react-native'
import { Card, ListItem, Button, Icon,Avatar } from 'react-native-elements'
import { Divider } from 'react-native-elements';

const CustomerNotificationScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Notification",
            headerStyle: { backgroundColor: '#27334F' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
        })
    }, [navigation]);
    return (
       <SafeAreaView>
           <ScrollView>
               <Card>
               <ListItem>
               <Avatar
  rounded
  source={require('../assets/avatar.jpg')}
/>
                   <ListItem.Content>
                       <ListItem.Title>Your Shippment is Disptches </ListItem.Title>
                   </ListItem.Content>
               </ListItem>
       <Card.Divider />
               <ListItem>
               <Avatar
  rounded
  source={require('../assets/avatar.jpg')}
/>
                   <ListItem.Content>
                       <ListItem.Title>Your Shippment is Reached </ListItem.Title>
                   </ListItem.Content>
               </ListItem>
               </Card>
           </ScrollView>
       </SafeAreaView>
    )
}

export default CustomerNotificationScreen

const styles = StyleSheet.create({})
