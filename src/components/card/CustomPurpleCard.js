import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { theme } from '../../theme/theme'
import StoreIcon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    shopItem: {
        flexDirection: 'row',
        height: 150
    },
    shopTittleStyle: {
        fontFamily: "CircularStd-Bold",
        fontSize: 40,
        color: theme.colors.white
    },
    leftItem: {
        flex: 0.65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        
    },
    rightItem:{
        
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.yellow
    }
});

const CustomPurpleCard = ({ title = "", idShop = "", idMall = ""}) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('Store', {
            name: title,
            mallid: idMall,
            shopId: idShop
        });
    }

    return (
        <TouchableOpacity
            onPress={onPress}
        >
        <View style={styles.shopItem}>
            <View style={styles.leftItem}>
                <Text style={styles.shopTittleStyle}>{title}</Text>
            </View>
            <View style={styles.rightItem}>
                <StoreIcon name="store" size={60} color={theme.colors.primary} />
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default CustomPurpleCard