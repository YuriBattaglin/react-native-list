import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ObjectCardProps extends TouchableOpacityProps{
    object: string;
}

export function ObjectCard({ object, ...rest } : ObjectCardProps){
    return(
    <TouchableOpacity 
        style={styles.buttonObject}
        {...rest}
    >
        <Text style={styles.textObject}>
            {object}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textObject: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    buttonObject: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 8
    },
});