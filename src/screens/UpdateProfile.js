import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';
import ChangePassword from '../components/ChangePassword'; 
import ChangeUsername from '../components/ChangeUsername'; 

const UpdateProfile = ({ navigation }) => {

    return (
        <View style={styles.container}>
          <Menu navigation={navigation} />
          <Text style={styles.title}>Update Profile</Text>    
          <View>
              <ChangeUsername />
          </View>
          <View>
              <ChangePassword />
          </View>

         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginRight: 30
    }, 
    title: {
        marginTop: 40, 
        marginBottom: 20, 
        fontSize: 50, 
        fontWeight: '200',
        color: '#333'
    },  
})

export default UpdateProfile; 