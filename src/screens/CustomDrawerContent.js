import React from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform, SafeAreaView } from 'react-native'; 

import Header from '../components/Header';
import CustomButton from '../components/CustomButton'; 
import { ScrollView } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height; 

const CustomDrawerContent = ({ navigation }) => {
    return(
        <SafeAreaView style={{ flex : 1 }}>
            <ScrollView>
                <Header initials="MS" name="Maninder Singh" username="ms14xe" role="Admin" />
          
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.navigationText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('DailyInstallReport')}
                >
                    <Text style={styles.navigationText}>Create Daily Install Report</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('AddProject')}
                >
                    <Text style={styles.navigationText}>Add Project</Text>
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

            </ScrollView>
        </SafeAreaView>
    ); 

}

const styles = StyleSheet.create({
    navigationText: {
        marginLeft: 30,
        marginBottom: (Platform.OS === 'ios' ? 42 : 30),
        fontSize: 18,
        fontWeight: '200'
    },
    logoutButton: {
        marginBottom: 50
     
    }
})

export default CustomDrawerContent; 