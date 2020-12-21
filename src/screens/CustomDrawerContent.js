import { blue } from '@material-ui/core/colors';
import React from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native'; 

import Header from '../components/Header';

const height = Dimensions.get('window').height; 

const CustomDrawerContent = ({ navigation }) => {
    return(

        <View style={styles.container}>
            <Header initials="MS" name="Maninder Singh" username="ms14xe" role="Admin" />
          
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.navigationText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('DailyInstallReport')}
                >
                    <Text style={styles.navigationText}>Daily Install Report</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('UpdateProfile')}
                >
                    <Text style={styles.navigationText}>Update Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('AddUser')}
                >
                    <Text style={styles.navigationText}>Add User</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('DeleteUser')}
                >
                    <Text style={styles.navigationText}>Delete User</Text>
                </TouchableOpacity>
                

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
    navigationText: {
        marginLeft: 30,
        marginTop: 40,
        fontSize: 20,
        fontWeight: (Platform.OS === 'ios' ? '200' : `200`)
    },
    logoutButton: {
        marginLeft: 30,
        position: 'absolute', 
        bottom: 80, 
        
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
        textAlign: 'center',
        
    }
})

export default CustomDrawerContent; 