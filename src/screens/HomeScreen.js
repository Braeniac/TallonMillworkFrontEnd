import { NavigationContainer } from '@react-navigation/native';
import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import menu from '../assets/icons/drawerMenu.png'; 

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={ () => navigation.openDrawer() }
            >
                <Image
                    style={styles.menu}
                    source={menu} 
                />
            </TouchableOpacity>
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