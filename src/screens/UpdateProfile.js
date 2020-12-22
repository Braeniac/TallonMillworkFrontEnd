import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';

const UpdateProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Menu navigation={navigation} />
          <Text>update profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    }, 
})

export default UpdateProfile; 