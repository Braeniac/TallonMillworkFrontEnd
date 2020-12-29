import React from 'react'; 
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'; 

const RegularUser = ({ navigation }) => {
    return(
        <>
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
        </>
    )
}

const styles = StyleSheet.create({
    navigationText: {
        marginLeft: 30,
        marginBottom: (Platform.OS === 'ios' ? 42 : 30),
        fontSize: 18,
        fontWeight: '200'
    }
})

export default RegularUser; 