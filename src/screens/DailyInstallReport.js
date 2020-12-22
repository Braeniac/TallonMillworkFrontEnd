import React from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';

const DailyInstallReport = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <Menu navigation={navigation} />
           <Text style={styles.title}>Daily Install Report</Text>
           <TextInput
            
           />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginRight: 30
    }, 
    title: {
        fontSize: 40,
        marginTop: 10,
        color: '#333'
    },
})

export default DailyInstallReport; 