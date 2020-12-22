import React from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native'; 

import Header from '../components/Header';
import CustomButton from '../components/CustomButton'; 

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
            
            <View
                style={styles.logoutButton}
            >
                <CustomButton title="Logout" />
            </View>

        </View>
    ); 

}

const styles = StyleSheet.create({
    container: {
        height
    },
    navigationText: {
        marginLeft: 30,
        marginTop: 42,
        fontSize: 20,
        fontWeight: '200'
    },
    logoutButton: {
        position: 'absolute', 
        bottom: (Platform.OS === 'ios' ? 80 : 60),    
    }
})

export default CustomDrawerContent; 