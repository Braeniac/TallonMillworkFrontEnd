import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native'; 

const Header = ({ initials, name, username, role }) => {
    return(
        <View style={styles.container}>

            <View style={styles.initials}>
                <Text style={styles.initialsText}>{initials}</Text>
            </View>

            <View style={styles.userInfo}>
                <Text style={styles.textInfo}>{name}</Text>
                <Text style={styles.textInfo}>@{username}</Text>
                <Text style={styles.textInfo}>{role}</Text>
            </View>

        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginTop: (Platform.OS == 'ios') ? 60 : 30
    },
    initials: {
        backgroundColor: '#333',
        width: 120, 
        height: 120, 
        borderRadius: 120/2,
        justifyContent: 'center',
    },
    initialsText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 50
    },
    userInfo: {
        marginTop: 20
    },
    textInfo: {
        fontSize: 20
    }
}); 

export default Header; 