import React,{useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView, ScrollView,TouchableOpacity } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { TextInput, Checkbox,Button} from 'react-native-paper';




const CarrierScreen = ({navigation}) => {
    const[checked, setChecked]=useState('');
    const[Van, setVan]=useState('');
    return (
       <SafeAreaView>
           <ScrollView>
           <Card >
           <Card.Divider width={1}   color="black"/>
        {/* Carrier INfo code start Here */}
        <Card.Title style={{color:'#00B437'}}>BUSINESS INFO</Card.Title>
        <Card.Divider  width={1}   color="black" />
     <TextInput style={{marginTop:10}}
      mode="outlined"
      placeholder="Enter Your Company Name"
    />
    
     <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="Street Address "
    />
    <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="Enter Your Phone Number"

    />
    <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="PostCode"

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
        <Card.Divider width={1}   color="black" marginTop={15}/>
        {/* Carrier INfo code start Here */}
        <Card.Title style={{color:'#00B437'}}>What equipment will you use?</Card.Title>
        <Card.Divider  width={1}   color="black" />
        {/* Service offer card in Carrier Screen Code is Start here*/}
     <TextInput style={{marginTop:20}}
      mode="outlined"
      secureTextEntry
      placeholder="Truck,Van,Heavy Loader etc..."
    /> 
    
    <View style={{flexDirection: 'row',alignItems:'center',marginTop:10}}  >    
    <Checkbox
         
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);}}
    />
    <Text>I Agree To The Terms And Policy...</Text>
    </View>
    <View style={{width:300,marginTop:20}}>
      <TouchableOpacity>
     <Button  mode="contained" color="#00B437"  onPress={() => navigation.navigate('Customer_Feed')}>
      Join 
     </Button>
     </TouchableOpacity>
    </View>
     </Card>


           </ScrollView>
       </SafeAreaView>
    )
}

export default CarrierScreen

const styles = StyleSheet.create({})
