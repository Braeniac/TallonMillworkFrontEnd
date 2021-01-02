import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';

const HomeScreen = ({ navigation }) => {

    const [name, setName] = useState('Maninder'); 

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