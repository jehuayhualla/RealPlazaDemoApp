import React from 'react';
import { Button, Image, Input } from 'react-native-elements';
import { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator, 
    FlatList
  } from 'react-native';

import { theme } from '../theme/theme' 

import CustomYellowCard from '../components/card/CustomYellowCard'
import CustomPurpleCard from '../components/card/CustomPurpleCard'

import APIKit, {setClientToken} from '../api/APIKit'

const StoresScreen = ({ route, navigation }) => {

    const [loading, SetLoading] = useState(false)
    const [mall, SetMall] = useState("Seleccionar Mall")
    const [shopList, SetShopList] = useState([])
    const { name, mallid } = route.params;

    const onSuccessShopList = ({data}) => {
        
        const ndata = data.data.map((item, idx) =>{
            return {id: idx, name: item.name, shopId: item.id}
        })
        SetShopList(ndata)
        SetLoading(false)
    }

    const onFailure= error => {
        console.log(error)
        SetLoading(false)
    }

    useEffect(()=>{
        const payload = new URLSearchParams()
        payload.append('mallId', mallid)

        SetLoading(true)

        APIKit.post('/shops/getAllByMall', payload)
        .then(onSuccessShopList)
        .catch(onFailure);
    },[])

    const renderItem = ({item}) => {
        if(item.id % 2)
            return <CustomPurpleCard title={item.name} idMall={mallid} idShop={item.shopId} />
        else
            return <CustomYellowCard title={item.name} idMall={mallid} idShop={item.shopId}/>
    }

    return (
        loading ?
        <View style={[styles.container,styles.centerLoading]}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
        :
		<View style={[styles.container]}>
            <Text style={styles.tittleStyle}>{name} </Text>
            <Text style={styles.nameStyle}>Tiendas</Text>
            
            <View style={styles.shopsContainer}>
                <FlatList
                    data={shopList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      //justifyContent: 'center',
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
    shopsContainer: {
        flex:1
    },
    
});

export default StoresScreen