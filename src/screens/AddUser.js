import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';

const AddUser = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Menu navigation={navigation} />
          <Text>add user</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    }, 
})

export default AddUser; 