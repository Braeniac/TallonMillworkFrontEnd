import { blue } from '@material-ui/core/colors';
import React from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'; 

import Header from '../components/Header';

const height = Dimensions.get('window').height; 

const CustomDrawerContent = () => {

    return(
        <View style={styles.container}>
            <Header initials="MS" name="Maninder Singh" username="ms14xe" role="Admin" />
          


            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => console.log('pressed')}
            >
                <View style={styles.logoutContainer}>
                    <Text style={styles.logoutText}>Logout</Text>
                </View>
            </TouchableOpacity>
            

        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        height
    },
    logoutButton: {
        marginLeft: 30,
        marginTop: 100
        
    },
    logoutContainer: {
        backgroundColor: '#2D7FF3',
        width: 160,
        height: 35,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoutText: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default CustomDrawerContent; 