import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import CustomButton from '../CustomButton'; 

const onPress = () => {
    console.log('Change Username')
}

const ChangeUsername = () => {

    const [currentUsername, setCurrentUsername] = useState(''); 
    const [newUsername, setNewUsername] = useState('');

    return(
        <View>
            <Text style={styles.title}>Change Username:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Current Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setCurrentUsername(text)}
                value={currentUsername}           
            />
            <TextInput
                style={styles.textInput}
                placeholder="New Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setNewUsername(text)}
                value={newUsername}           
            />
            <View
                style={styles.button}
            >
               <CustomButton title="Change Username" onPress={onPress} />
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

export default ChangeUsername; 