import React from 'react';

import { Text, View, StyleSheet, Button } from 'react-native'

const Nosotros1 = ({navigation, route}) => {

    const {cliente}= route.params
    
    const visitarNosotros=()=>{
        navigation.navigate('Nosotros')
    }


    return (

        <View style={styles.contenedor}>

            <Text>{cliente}</Text>

            <Button
             title='Inicio'
             onPress={()=>visitarNosotros()}
             
            
            />

        </View>

 

      );
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
 
export default Nosotros1;