import React,{useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import { Card, ListItem,Icon} from 'react-native-elements'
import { TextInput, Checkbox,Button} from 'react-native-paper';


const BrokerScreen = ({navigation}) => {
    const[checked, setChecked]=useState('');

    return (
       <SafeAreaView>
           <ScrollView>
           <Card >
        {/* Broker Screen code start Here */}
    
     <TextInput
      mode="outlined"
      placeholder="Enter Your  Name"
    />
     <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="Broker Type"

    />
     <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="Enter Your Phone Number"

    />
    
    <View  style={{height:10}}/>
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
     <TextInput style={{marginTop:20}}
      mode="outlined"
      placeholder="Enter Your  Email "
    />
     <TextInput style={{marginTop:20}}
      mode="outlined"
      secureTextEntry
      placeholder="Create Password "
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

export default BrokerScreen

const styles = StyleSheet.create({})
