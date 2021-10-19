import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon,Avatar } from 'react-native-elements'
import { Divider } from 'react-native-elements';

const CutomerPostScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Post",
            headerStyle: { backgroundColor: '#27334F' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
        })
    }, [navigation]);
    return (
        <SafeAreaView>
            <ScrollView>
                <ListItem >
                    <ListItem.Content style={{alignItems:'center',justifyContent:'center'}}>
                        <ListItem.Title >Categories</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <Divider orientation="horizontal" width={1}  />
           <TouchableOpacity>
                 <ListItem>
                 <Avatar
      rounded
     source={require('../assets/car.jpg')}
     size="large"
           />
                     <ListItem.Content>
                         <ListItem.Title>VEHICLES & BOATS</ListItem.Title>
                         <ListItem.Subtitle>Cars, Motorocycle,RVs,</ListItem.Subtitle>
                         <ListItem.Subtitle>Trailers, Parts</ListItem.Subtitle>
                     </ListItem.Content>
                 </ListItem>
            </TouchableOpacity>
            <Divider orientation="horizontal" width={1}  />


            <TouchableOpacity>
                 <ListItem>
                 <Avatar
      rounded
     source={require('../assets/machine.jpg')}
     size="large"
           />
                     <ListItem.Content>
                         <ListItem.Title>HOUSEHOLD ITEMS</ListItem.Title>
                         <ListItem.Subtitle>Furniture, Appliances</ListItem.Subtitle>
                        
                     </ListItem.Content>
                 </ListItem>
            </TouchableOpacity>
            <Divider orientation="horizontal" width={1}  />
            
            <TouchableOpacity>
                 <ListItem>
                 <Avatar
      rounded
     source={require('../assets/box.jpg')}
     size="large"
           />
                     <ListItem.Content>
                         <ListItem.Title>MOVES</ListItem.Title>
                         <ListItem.Subtitle>Apartment, Home, Office</ListItem.Subtitle>
                        
                     </ListItem.Content>
                 </ListItem>
            </TouchableOpacity>
            <Divider orientation="horizontal" width={1}  />
            <TouchableOpacity>
                 <ListItem>
                 <Avatar
      rounded
     source={require('../assets/heay.jpg')}
     size="large"
           />
                     <ListItem.Content>
                         <ListItem.Title>HEAY EQUIMENTS</ListItem.Title>
                         <ListItem.Subtitle>Farms, Constructions</ListItem.Subtitle>
                        
                     </ListItem.Content>
                 </ListItem>
            </TouchableOpacity>
            <Divider orientation="horizontal" width={1}  />
            <TouchableOpacity>
                 <ListItem>
                 <Avatar
      rounded
     source={require('../assets/freight.jpg')}
     size="large"
           />
                     <ListItem.Content>
                         <ListItem.Title>FREIGHTS</ListItem.Title>
                         <ListItem.Subtitle>Part Load , Full Load</ListItem.Subtitle>
                        
                     </ListItem.Content>
                 </ListItem>
            </TouchableOpacity>
            <Divider orientation="horizontal" width={1}  />
            <TouchableOpacity>
                 <ListItem>
                 <Avatar
      rounded
     source={require('../assets/dog.jpg')}
     size="large"
           />
                     <ListItem.Content>
                         <ListItem.Title>ANIMALS</ListItem.Title>
                         <ListItem.Subtitle>Dogs, Cats, LiveStocks</ListItem.Subtitle>
                        
                     </ListItem.Content>
                 </ListItem>
            </TouchableOpacity>
            <Divider orientation="horizontal" width={1}  />
            <TouchableOpacity>
                 <ListItem>
                 <Avatar
      rounded
     source={require('../assets/hay.jpg')}
     size="large"
           />
                     <ListItem.Content>
                         <ListItem.Title>OTHERS</ListItem.Title>
                         <ListItem.Subtitle>Hay Bales, WaterSlides, Jucuzzis etc</ListItem.Subtitle>
                        
                     </ListItem.Content>
                 </ListItem>
            </TouchableOpacity>
            <Divider orientation="horizontal" width={1}  />



            </ScrollView>
        </SafeAreaView>
    )
}

export default CutomerPostScreen

const styles = StyleSheet.create({})
