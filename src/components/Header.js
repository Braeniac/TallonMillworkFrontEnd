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
                <Text style={styles.textInfo}>{username}</Text>
                {role ? 
                    <Text style={styles.textInfo}>Admin</Text>
                :
                null 
                }
                {/* <Text style={styles.textInfo}>{role}</Text> */}
            </View>

        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginTop: (Platform.OS == 'ios') ? 60 : 35, 
        marginBottom: 20
    },
    initials: {
        backgroundColor: '#333',
        width: 150, 
        height: 150, 
        borderRadius: 150/2,
        justifyContent: 'center',
    },
    initialsText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 50
    },
    userInfo: {
        marginTop: 10,
    },
    textInfo: {
        fontSize: 15
    }
}); 

export default Header; 