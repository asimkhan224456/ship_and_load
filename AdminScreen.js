import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Button,Card } from 'react-native-elements';
import { ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const theme = {
    colors: {
      primary: '#00B437',
    }
  }


const AdminScreen = ({navigation}) => {
    return (
        <View style={{alignItems:'center',justifyContent:'center',flex:1,marginTop:10}}>
            
        <View style={styles.InputContainer}>
            <Card  containerStyle={{borderRadius:20,}}>
        <Input
placeholder='Email'
leftIcon={
<Icon
  name='user'
  size={24}
  color='black'
/>
}
/>
<Input
secureTextEntry
placeholder='Password'
leftIcon={
<Icon

  name='lock'
  size={24}
  color='black'
/>
}
/>
<ThemeProvider theme={theme}>
<Button  title="Login"/>
</ThemeProvider >

</Card>
</View>
    
    </View>
    )
}

export default AdminScreen

const styles = StyleSheet.create({
    InputContainer:{
        width:300,
        marginTop:10,
    }
})
