import React from 'react';

import { Text, View, StyleSheet, Button } from 'react-native'


const Inicio1 = (navigation) => {

    const informacion ={
        cliente= Lucas,
        totalPagar=200
    }

    const visitrarNostros=()=>{
        navigation.navigate('Nosotros', informacion)
    }


    return (

        <View>

            <Text>Inicio</Text>

            <Button
                title='Ir a nosotros'
                onPress={()=>visitrarNostros()}
            
            />

        </View>

      );
}

const styles = StyleSheet.create({
    conteneror:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },

})
 
export default Inicio1;