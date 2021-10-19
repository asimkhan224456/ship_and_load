import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon,Avatar } from 'react-native-elements'

const CutomerWatchelistScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Watch List",
            headerStyle: { backgroundColor: '#27334F' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
        })
    }, [navigation]);
    return (
        <SafeAreaView>
        <ScrollView>
           
          <Card containerStyle={{borderRadius:20,}}>
              <Card.Title> TWO TABLE GLASS</Card.Title>
       
<ListItem>
<Avatar 
   size="small"
   rounded
  source={require('../assets/table.jpg')}
/>
    <ListItem.Content>
    <ListItem.Title>New York</ListItem.Title>
    <ListItem.Title> <MaterialCommunityIcons name="subdirectory-arrow-right" size={24} color="skyblue" />
    </ListItem.Title>
    <ListItem.Title style={{marginTop:40}}>
        LA City
    </ListItem.Title>
    <ListItem.Title> <MaterialCommunityIcons name="subdirectory-arrow-left" size={24} color="skyblue" />
    </ListItem.Title>
    </ListItem.Content>
    <ListItem.Content>
        <ListItem.Title>OFFER</ListItem.Title>
    <ListItem.Title>778$</ListItem.Title>
    </ListItem.Content>
</ListItem>
<Button  title="Accept Proposal"/>
              </Card>  
             
          <Card containerStyle={{borderRadius:20,}}>
              <Card.Title> TWO TABLE GLASS</Card.Title>
       
<ListItem>
<Avatar 
   size="small"
   rounded
  source={require('../assets/table.jpg')}
/>
    <ListItem.Content>
    <ListItem.Title>New York</ListItem.Title>
    <ListItem.Title> <MaterialCommunityIcons name="subdirectory-arrow-right" size={24} color="skyblue" />
    </ListItem.Title>
    <ListItem.Title style={{marginTop:40}}>
        LA City
    </ListItem.Title>
    <ListItem.Title> <MaterialCommunityIcons name="subdirectory-arrow-left" size={24} color="skyblue" />
    </ListItem.Title>
    </ListItem.Content>
    <ListItem.Content>
    <ListItem.Title>No Quotes</ListItem.Title>
    </ListItem.Content>
</ListItem>
<Button  title="Accept Proposal"/>
              </Card>  
              
              </ScrollView>
    </SafeAreaView>
    )
}

export default CutomerWatchelistScreen

const styles = StyleSheet.create({})
