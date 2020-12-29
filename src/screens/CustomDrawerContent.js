import React, { useState } from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform, SafeAreaView } from 'react-native'; 
import Header from '../components/Header';
import CustomButton from '../components/CustomButton'; 
import { ScrollView } from 'react-native-gesture-handler';

import AdminUser from '../components/AdminUser';
import RegularUser from '../components/RegularUser';

const height = Dimensions.get('window').height; 
   
const CustomDrawerContent = ({ navigation }) => {

    const [isAdmin, setIsAdmin] = useState(true); 

    return(
        <SafeAreaView style={{ flex : 1 }}>
            <ScrollView>
                <Header initials="MS" name="Maninder Singh" username="ms14xe" role={isAdmin} />

                {isAdmin ? 
                    <AdminUser navigation={navigation}/>
                : 
                    <RegularUser navigation={navigation}/>
                }

                <View
                    style={styles.logoutButton}
                >
                    <CustomButton title="Logout" />
                </View>

            </ScrollView>
        </SafeAreaView>
    ); 

}

const styles = StyleSheet.create({
    logoutButton: {
        flex: 0.2
    }
})

export default CustomDrawerContent; 