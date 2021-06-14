import React from 'react';
import { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator, 
  } from 'react-native';

import { theme } from '../theme/theme' 

import APIKit, {setClientToken} from '../api/APIKit'

const StoresScreen = ({ route, navigation }) => {

    const [loading, SetLoading] = useState(false)
    const { name, mallid, shopId } = route.params;

    const onSuccessViewList = ({data}) => {
        
        SetLoading(false)
    }

    const onFailure= error => {
        console.log(error)
        SetLoading(false)
    }

    useEffect(()=>{
        const payload = new URLSearchParams()
        payload.append('shopId', shopId)
        payload.append('mallId', mallid)

        SetLoading(true)
        
        APIKit.post('/shops/addVisitor', payload)
        .then(onSuccessViewList)
        .catch(onFailure);
    },[])

    return (
        loading ?
        <View style={[styles.container,styles.centerLoading]}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
        :
		<View style={[styles.container]}>
            <Text style={styles.tittleStyle}>{name}</Text>
            <Text style={styles.nameStyle}>Bienvenido</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary
    },
    centerLoading:{
      alignItems:'center', 
      justifyContent: 'center'
    },
    tittleStyle:{
        //fontFamily: "CircularStd-Bold",
        fontFamily: "PublicoBanner-Ultra",
        fontSize: 40,
        color: theme.colors.white,
        marginBottom: 0,
        textAlign: 'right',
        marginHorizontal: 8
    },
    nameStyle: {
        fontFamily: "CircularStd-Bold",
        color: theme.colors.yellow,
        fontSize: 55,
        lineHeight: 55,
        marginTop: 30,
        marginHorizontal: 8
    },
    
});

export default StoresScreen