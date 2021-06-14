import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { theme } from '../../theme/theme'
import ModalSelector from 'react-native-modal-selector'
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropDownIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    inputContainerStyle: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: theme.colors.primary,
        paddingLeft: 4,
        margin: 0,
    },
    inputStyle: {
        marginTop: 0,
        marginBottom: -16,
        width: '100%',
        padding: 0
    },
    textStyle: {
        fontFamily: "CircularStd-Bold",
        //fontFamily: "PublicoBanner-Ultra",
        fontSize: 30,
        color: theme.colors.white,
        marginBottom: 0,
    },
    buttonContainer:{
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    overlayStyle: {
        flex: 1, 
        padding: '5%', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(115,0,224,0.7)' 
    },
    optionTextStyle: {
        fontFamily: "CircularStd-Bold",
        fontSize: 20,
        color: theme.colors.white,
    },
    optionContainerStyle: {
        backgroundColor: 'rgba(115,0,224,0.7)' 
    },
    cancelTextStyle: {
        fontFamily: "CircularStd-Bold",
        fontSize: 20,
        color: theme.colors.primary,
    }
});

const CustomSelector = ({ data = [], title = "", onChange = () => {}}) => {
    return (
        <ModalSelector
            data={data}
            optionTextStyle={styles.optionTextStyle}
            onChange={onChange}
            overlayStyle={styles.overlayStyle}
            optionContainerStyle= {styles.optionContainerStyle}
            cancelTextStyle={styles.cancelTextStyle}
            cancelText="Cancelar"
        >
            <View style={styles.buttonContainer}>
                <LocationIcon name="location-outline" size={30} color="#fff"/>
                <Text style={styles.textStyle}>{title}</Text>
                <DropDownIcon name="arrow-drop-down" size={30} color="#fff"/>
            </View>
        </ModalSelector>
    )
}

export default CustomSelector