import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import CustomButton from '../CustomButton'; 

const onPress = () => {
   
}

const ChangePassword = () => {

    const [currentPassword, setCurrentPassword] = useState(''); 
    const [newPassword, setNewPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState(''); 

    return(
        <View>
            <Text style={styles.title}>Change Password:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Current Password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setCurrentPassword(text)}
                value={currentPassword}           
            />
            <TextInput
                style={styles.textInput}
                placeholder="New Password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setNewPassword(text)}
                value={newPassword}           
            />
            <TextInput
                style={styles.textInput}
                placeholder="Verify Password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setVerifyPassword(text)}
                value={verifyPassword}           
            />
            <View
                style={styles.button}
            >
               <CustomButton title="Change Password" onPress={onPress} />
           </View>


        </View>
    ); 
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    },
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333'
    },
    button: {
        marginTop: 40,
        alignItems: 'flex-end'
    }
})

export default ChangePassword; 