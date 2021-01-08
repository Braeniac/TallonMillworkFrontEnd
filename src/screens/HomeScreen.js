import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';
import { retrieveUsers } from '../redux/actions/userAction'; 

//redux
import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = ({ navigation }) => {

    const { token,  isLoggedIn } = useSelector(state => state.auth)
    const { error, user } = useSelector(state => state.user)
    const { isLoading, success, project, allProjects } = useSelector(state => state.project); 
    const dispatch = useDispatch(); 

    return (
     
        <View style={styles.container}>
        {!(isLoggedIn) ? null : 
            <View>
           
                <Menu navigation={navigation} />
                {/* <Text style={styles.welcome}>Welcome back, {user.fName}! </Text> */}



            


            </View>
        }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },
    welcome: {
        textAlign: 'center',
        fontSize: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '200'
    } 
})

export default HomeScreen; 