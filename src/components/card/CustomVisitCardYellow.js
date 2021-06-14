import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { theme } from '../../theme/theme'
import StoreIcon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    shopItem: {
        flexDirection: 'row',
        height: 75
    },
    leftItem: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.yellow
    },
    rightItem:{
        flex: 0.65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
    },
    shopTittleStyle: {
        fontFamily: "CircularStd-Bold",
        fontSize: 20,
        color: theme.colors.secondary
    },
    mallTittleStyle: {
        fontFamily: "PublicoBanner-Ultra",
        fontSize: 16,
        color: theme.colors.secondary
    },
    dateTittleStyle: {
        fontFamily: "CircularStd-Bold",
        fontSize: 14,
        color: theme.colors.secondary
    },
});

const CustomVisitCardYellow = ({ date = "", shopName = "", mallName = ""}) => {
    
    return (
        <View style={styles.shopItem}>
            <View style={styles.leftItem}>
                <StoreIcon name="store" size={30} color={theme.colors.primary} />
            </View>
            <View style={styles.rightItem}>
                <Text style={styles.mallTittleStyle}>{mallName}</Text>
                <Text style={styles.shopTittleStyle}>{shopName}</Text>
                <Text style={styles.dateTittleStyle}>{date}</Text>
                
            </View>
        </View>
    )
}

export default CustomVisitCardYellow