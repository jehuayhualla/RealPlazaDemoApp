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
        color: theme.colors.secondary
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
        backgroundColor: theme.colors.white
    }
});

const CustomYellowCard = ({ title = "", idShop = "", idMall = ""}) => {
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
                <StoreIcon name="store" size={60} color={theme.colors.primary} />
            </View>
            <View style={styles.rightItem}>
                <Text style={styles.shopTittleStyle}>{title}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default CustomYellowCard