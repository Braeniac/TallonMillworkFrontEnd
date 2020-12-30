import React, { useState } from 'react'; 
import {View, StyleSheet, Dimensions, SafeAreaView } from 'react-native'; 
import CustomButton from '../components/CustomButton'; 
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/drawerNaviagtion/Header';
import AdminUser from '../components/drawerNaviagtion/AdminUser';
import RegularUser from '../components/drawerNaviagtion/RegularUser';

const height = Dimensions.get('window').height; 
   
const CustomDrawerContent = ({ navigation }) => {

    const [initials, setInitials] = useState('MS'); 
    const [name, setName] = useState('Maninder Singh'); 
    const [username, setUsername] = useState('ms14xe'); 
    const [isAdmin, setIsAdmin] = useState(true); 

    return(
        <SafeAreaView style={{ flex : 1 }}>
            <ScrollView>
                
                <Header initials={initials} name={name} username={username} role={isAdmin} />

                {isAdmin ? 
                    <AdminUser navigation={navigation} />
                : 
                    <RegularUser navigation={navigation} />
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
    },
    footers: {
        borderColor: 'lightgray',
        borderBottomWidth: 1
    }
})

export default CustomDrawerContent; 