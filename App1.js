import React from 'react';
import { Text, View } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Inicio from './views/Inicio1'
import Nosotros from './views/Nosotros1'


const Stack = createStackNavigator()

const App = () => {
    return ( 


        <NavigationContainer>

            <Stack.Navigator
                initialRouteName='Inicio'
                screenOptions={({ route }) => ({
                    title: route.params.cliente,
                    headerStyle: {
                        backgroundColor: '#F4511E'
                    },
                    headerTintColor: '#FFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                })}
            >

                <Stack.Screen
                    name='Inicio'
                    component={Inicio}
                    options=
                
                />

                <Stack.Screen
                    name='Nosotros'
                    component={Nosotros}
                   
                                   
                />


            </Stack.Navigator>

        </NavigationContainer>
     );
}
 
export default App;