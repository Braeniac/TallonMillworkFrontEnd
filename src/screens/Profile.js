import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, SafeAreaView } from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';

import Menu from '../components/Menu';
import ChangePassword from '../components/updateProfile/ChangePassword'; 
import ChangeUsername from '../components/updateProfile/ChangeUsername'; 

const Profile = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Menu navigation={navigation} />
                <Text style={styles.title}>Profile</Text>    
                
                
                
                
                
                
                
                
                
                {/* <View>
                    <ChangeUsername />
                </View>
                <View>
                    <ChangePassword />
                </View> */}
            
            
            
            
            
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios' ? -45 : 0),
        marginHorizontal: 20,
        marginBottom: 30 
    }, 
    title: {
        marginTop: 30, 
        marginBottom: 20, 
        fontSize: 50, 
        fontWeight: '200',
        color: '#333'
    },  
})

export default Profile; 