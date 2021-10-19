import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon,Avatar } from 'react-native-elements'
const CutomerFindScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Feed:',
            headerStyle: { backgroundColor: '#27334F' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
                 headerRight:()=> (
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                      <Text style={{color:'white',alignItems:'center',marginTop:5,marginRight:10,}}>Categories(All)</Text>
                      <Text style={{color:'white',alignItems:'center',marginTop:5,marginRight:20,marginLeft:20,}}>All Payment Types</Text>
                    </View>
                 ),
        })
    }, [navigation]);
    return (
    <SafeAreaView>
        <ScrollView>
           
          <Card containerStyle={{borderRadius:20,}}>
              <Card.Title> TWO TABLE GLASS</Card.Title>
       
<ListItem>
    <TouchableOpacity>
<MaterialCommunityIcons name="star-circle" size={24} color="skyblue" />
</TouchableOpacity>
<Avatar 
   size="large"
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
              </Card>  
             
          <Card containerStyle={{borderRadius:20,}} >
              <Card.Title> TWO TABLE GLASS</Card.Title>
       
<ListItem>
    <TouchableOpacity>
<MaterialCommunityIcons name="star-circle" size={24} color="skyblue" />
</TouchableOpacity>
<Avatar 
   size="large"
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
              </Card>  
              
              </ScrollView>
    </SafeAreaView>
    )
}

export default CutomerFindScreen

const styles = StyleSheet.create({})
