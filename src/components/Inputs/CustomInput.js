import React from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme'

const styles = StyleSheet.create({
    inputContainerStyle: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: theme.colors.yellow,
        paddingLeft: 4,
        margin: 0,
    },
    inputStyle: {
        marginTop: 0,
        marginBottom: -16,
        width: '100%',
        padding: 0,
        color: "white"
    }
});

const CustomInput = ({ onChangeText = () => {}, icontype = 'foundation', iconname = 'mail', secure = false}) => {
    return (
        <Input
            leftIcon={{ type: icontype, name: iconname, color: theme.colors.yellow }}
            onChangeText={onChangeText}
            inputContainerStyle={styles.inputContainerStyle}
            placeholderTextColor={theme.colors.white} 
            containerStyle={styles.inputStyle}
            inputStyle={{color: theme.colors.white}} 
            secureTextEntry={secure}
        />
    )
}

export default CustomInput