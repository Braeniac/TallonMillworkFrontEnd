import { NavigationContainer } from '@react-navigation/native';
import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';



const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Menu navigation={navigation} />
            <Text>home screen</Text>

            

          
            




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    }, 
    menu: {
        marginTop: (Platform.OS == 'ios') ? 55 : 20,
        color: '#333333'
    }
})

export default HomeScreen; 