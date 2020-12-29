import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import logo from '../assets/logo/logo.png'

const height = Dimensions.get('screen').height; 
const width = Dimensions.get('screen').width; 

const SubmissionPage = ({ message }) => {
    return(
        <View style={styles.container}> 
            <Image
                source={logo}
                style={styles.logo}
            />
            <Text style={styles.text}>Thank You!</Text>
            <Text style={styles.msg}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width, 
        height,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20
    }, 
    text: {
        fontSize: 30,
        alignItems: 'center',
        marginBottom: 10
    },
    msg: {
        marginBottom: 10
    },
    logo: {
        width: 150, 
        height: 150,
        marginBottom: 20
    }
})

export default SubmissionPage; 