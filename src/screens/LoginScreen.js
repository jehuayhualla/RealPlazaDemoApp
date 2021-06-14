import React from 'react';
import { Button, Image, Input } from 'react-native-elements';
import { useState, useEffect, Fragment, useRef } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity
  } from 'react-native';

import { theme } from '../theme/theme' 

import CustomInput from '../components/Inputs/CustomInput'

import APIKit, {setClientToken} from '../api/APIKit'

const LoginScreen = ({ navigation }) => {
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('') 
    const [loading, SetLoading] = useState(false)

    const onChangeUsername = (value) => {
        SetUsername(value)
    }

    const onChangePassword = (value) => {
        SetPassword(value)
    }

    const onSuccess = ({data}) => {
        setClientToken(data.token);
        const name = data.data.names.split(" ")[0]
        navigation.navigate('Mainmenu', {
            name: name,
          });
        SetLoading(false)
    };

    const onFailure = error => {
        console.log(error);
        SetLoading(false)
        
    };

    const handleButtonSubmit = async () => {

        const payload = new URLSearchParams()
        payload.append('email', username)
        payload.append('password', password)

        SetLoading(true)

        APIKit.post('/users/login', payload)
        .then(onSuccess)
        .catch(onFailure);
    }


    return (
        loading ?
        <View style={[styles.container,styles.centerLoading]}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
        :
		<View style={[styles.container]}>

            <Text style={styles.tittleStyle}>Iniciar Sesión</Text>
            <CustomInput icontype='foundation' iconname='mail' onChangeText={onChangeUsername} />
            <CustomInput icontype='fontawesome' iconname='lock' onChangeText={onChangePassword} secure={true} />
            <View style={styles.containerButton}>
                <Button buttonStyle={styles.buttonStyleb} containerStyle={styles.containerButtonStyle} titleStyle={styles.buttonStyle} title="Ingresar" onPress={handleButtonSubmit} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary
    },
    centerLoading:{
      alignItems:'center', 
      justifyContent: 'center'
    },
    logotype:{
        height: 200,
        width: '100%'
    },
    tittleStyle:{
        //fontFamily: "CircularStd-Bold",
        fontFamily: "CircularStd-Bold",
        fontSize: 45,
        color: theme.colors.yellow,
        marginBottom: 8
    },
    buttonStyle: {
        fontFamily: "CircularStd-Bold",
        fontSize: 18,
        color: theme.colors.primary
    },
    containerButtonStyle: {
        width: '100%',
        backgroundColor: theme.colors.yellow,
    },
    containerButton: {
        padding: 10,
        width: '100%'
    },
    buttonStyleb:{
        backgroundColor: theme.colors.yellow,
        
    }
});

export default LoginScreen