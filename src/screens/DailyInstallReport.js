import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';

const DailyInstallReport = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <Menu navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    }, 
})

export default DailyInstallReport; 