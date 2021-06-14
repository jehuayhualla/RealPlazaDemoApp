import React from 'react';
import { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    FlatList
  } from 'react-native';

import moment from 'moment-timezone'

import { theme } from '../theme/theme' 

import CustomSelector from '../components/modals/CustomSelector'
import CustomVisitCardPurple from '../components/card/CustomVisitCardPurple'
import CustomVisitCardYellow from '../components/card/CustomVisitCardYellow';

import { useIsFocused } from "@react-navigation/native";

import APIKit from '../api/APIKit'


const MainMenuScreen = ({ route, navigation }) => {

    const [loading, SetLoading] = useState(false)
    const [mall, SetMall] = useState("Seleccionar Mall")
    const [mallList, SetMallList] = useState([])
    const [visitsList, SetVisitsList] = useState([])

    const { name } = route.params;
    const isFocused = useIsFocused();

    const onSuccessMallList = ({data}) => {
        
        const malls = data.data.map((o) =>{ return {key: o.id, label: o.name} })
        SetMallList(malls)
    }

    const onSuccessUserVisits = ({data}) => {
        const ndata = data.data.map((item, idx) =>{
            return {id: idx, date: moment(item.date).tz('America/Lima').format('MMMM Do YYYY, h:mm:ss a'), 
            mallName: item.mallName, shopName: item.shopName}
        })
        SetVisitsList(ndata)
        SetLoading(false)
    }
    const onFailure= error => {
        console.log(error)
    }
    useEffect(()=>{
        SetLoading(true)
        APIKit.get('/malls/getAll')
        .then(onSuccessMallList)
        .catch(onFailure);
    },[])

    useEffect(()=>{
        SetLoading(true)
        APIKit.get('/users/getAllVisits')
        .then(onSuccessUserVisits)
        .catch(onFailure);
    },[isFocused])

    const handleMallChange = (item) => {
        navigation.navigate('Stores', {
            name: item.label,
            mallid: item.key
          });
        //SetMall()
    }
    const renderItem = ({item}) => {
        if(item.id % 2)
            return <CustomVisitCardPurple date={item.date} shopName={item.shopName} mallName={item.mallName} />
        else
            return <CustomVisitCardYellow date={item.date} shopName={item.shopName} mallName={item.mallName} />
    }
    return (
        loading ?
        <View style={[styles.container,styles.centerLoading]}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
        :
		<View style={[styles.container]}>

            <Text style={styles.tittleStyle}>Bienvenido </Text>
            <Text style={styles.nameStyle}>{name} </Text>
            <CustomSelector data={mallList} title={mall} onChange={handleMallChange} />

            <Text style={styles.visitasStyle}>Últimas visitas </Text>
            <View style={styles.visitsContainer}>
                <FlatList
                    data={visitsList}
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
      padding: 8,
      //alignItems: 'center',
      //justifyContent: 'center',
      backgroundColor: theme.colors.primary
    },
    centerLoading:{
      alignItems:'center', 
      justifyContent: 'center'
    },
    tittleStyle:{
        fontFamily: "CircularStd-Bold",
        //fontFamily: "PublicoBanner-Ultra",
        fontSize: 40,
        color: theme.colors.yellow,
        marginBottom: 0,
    },
    nameStyle: {
        fontFamily: "CircularStd-Bold",
        color: theme.colors.yellow,
        fontSize: 55,
        lineHeight: 40,
    },
    visitasStyle:{
        fontFamily: "CircularStd-Bold",
        //fontFamily: "PublicoBanner-Ultra",
        fontSize: 30,
        color: theme.colors.white,
        marginTop: 36,
        marginBottom: 8,
    },
    visitsContainer: {
        flex:1
    },
});

export default MainMenuScreen