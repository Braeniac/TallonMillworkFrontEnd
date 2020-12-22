import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';

const DeleteUser = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <Menu navigation={navigation} />
           <Text>delete user</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    }, 
})

export default DeleteUser; 