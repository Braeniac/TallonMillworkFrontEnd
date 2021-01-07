import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';
import { allActiveProjects, activeProject } from '../redux/actions/projectAction'; 

//redux
import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = ({ navigation }) => {

    const { token } = useSelector(state => state.auth)
    const { isLoading, error, success, project, allProjects } = useSelector(state => state.project); 
    const dispatch = useDispatch(); 

    console.log(allProjects)

    return (
        <View style={styles.container}>
            <Menu navigation={navigation} />



            {/* ------- delete later ------ */}
            <TouchableOpacity
                onPress={
                    () => dispatch(allActiveProjects(token))
                }
            >
                <Text>get ALL projects</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={
                    () => dispatch(activeProject(2, token))
                }
            >
                <Text>get A projects</Text>
            </TouchableOpacity>









        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '200'
    } 
})

export default HomeScreen; 