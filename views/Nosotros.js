import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'
import Inicio from './Inicio';

const Nosotros = ({navigation, route}) => {

    const {clienteId}= route.params

    const visitarInicio=()=>{
        // navigation.navigate('Inicio')
        navigation.goBack()
    }
    return ( 

        <View
            style={styles.contenedor}
        >
            <Text>{clienteId}</Text>
            <Button
                title="Volver"
                onPress={()=>visitarInicio()}
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
 
export default Nosotros;