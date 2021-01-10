import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';
import { retrieveUsers } from '../redux/actions/userAction'; 
import { submitInstallersOnSite, retrieveReport, retrieveReportByID } from '../redux/actions/reportAction';

//redux
import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = ({ navigation }) => {

    const { token,  isLoggedIn, user } = useSelector(state => state.auth)
    const dispatch = useDispatch(); 


    console.log(user)

    

    return (
     
        <View style={styles.container}>
        {!(isLoggedIn) ? null : 
            <View>
                <Menu navigation={navigation} />
                <Text>Welcome back, {user.fName}</Text>


                



    
                        
                       
                        


                  
                            
                        

                        

            


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