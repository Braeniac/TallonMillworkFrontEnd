import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';

//redux
import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = ({ navigation }) => {

    


    



    return (
        <View style={styles.container}>
            <Menu navigation={navigation} />
            

          
            




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '200'
    } 
})

export default HomeScreen; 