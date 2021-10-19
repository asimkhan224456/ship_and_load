import React,{useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native'
import { Card, ListItem,Icon} from 'react-native-elements'
import { TextInput, Checkbox,Button} from 'react-native-paper';


const CustomerScreen = ({navigation}) => {
    const[checked, setChecked]=useState('');
    return (
      <SafeAreaView>
        {/* ScrollView is componet use for the Scroolling of the componets in the Screen*/}
      <ScrollView>
      <Card >
        <Card.Divider width={1}   color="black"/>
        {/* Customer Perosnal INfo code start Here */}
        <Card.Title style={{color:'#00B437'}}>PERSONAL INFO</Card.Title>
        <Card.Divider  width={1}   color="black" />
     <TextInput
      mode="outlined"
      placeholder="Enter Your  Name"
    />
     <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="Enter Your Phone Number"

    />
     <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="Enter Your  Email "
    />
     <TextInput style={{marginTop:20}}
      mode="outlined"
      secureTextEntry
      placeholder="Create Password "
    />
    <View  style={{height:10}}/>
    {/* Postal Adrres Code of Customer Screen is Here*/}
     <Card.Divider width={1}   color="black"/>
        <Card.Title style={{color:'#00B437'}}>POSTAL ADDRESS</Card.Title>
        <Card.Divider  width={1}   color="black" />
        <TextInput style={{marginTop:10}}
      mode="outlined"
      placeholder="Street "
    />
      <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="Postal Code"
    />
    <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="City"
    />
    <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="County"
    />
    {/* Check Box Code of the Customer Screen is here */}
    <View style={{flexDirection: 'row',alignItems:'center',marginTop:10}}>

    <Checkbox
         
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);}}
    />
    <Text> I Agree To The Terms And Policy...</Text>
    </View>
    {/* Sinup Button of the Customer Screen to Register Screen is Here */}
    <View style={{width:300,marginTop:20}}>
      <TouchableOpacity>
     <Button  mode="contained" color="#00B437"   onPress={() => navigation.navigate('Customer_Feed')}>
      Join 
     </Button>
    </TouchableOpacity>
    </View>
     </Card>
      </ScrollView>
      </SafeAreaView>
    )
}

export default CustomerScreen


