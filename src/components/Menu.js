import React from 'react'; 
import { View, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import menu from '../assets/icons/drawerMenu.png'; 

const Menu = ({ navigation }) => {
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
       
    }, 
    menu: {
        marginTop: (Platform.OS == 'ios') ? 55 : 20,
        color: '#333333'
    }
})

export default Menu; 