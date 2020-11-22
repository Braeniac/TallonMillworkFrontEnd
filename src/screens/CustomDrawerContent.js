import { blue } from '@material-ui/core/colors';
import React from 'react'; 
import {View, Text, StyleSheet, Dimensions } from 'react-native'; 

import Header from '../components/Header';

const height = Dimensions.get('window').height; 

const CustomDrawerContent = () => {

    return(
        <View style={styles.container}>
            <Header initials="MS" name="Maninder Singh" username="ms14xe" role="Admin" />
          

        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        height
    }
})

export default CustomDrawerContent; 