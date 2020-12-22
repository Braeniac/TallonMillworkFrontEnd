import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 


import Menu from '../components/Menu';
import CustomButton from '../components/CustomButton';

const onPress = () => {
    console.log("delete user");
}

const DeleteUser = ({ navigation }) => {

    const [uname, setUname] = useState('');

    return (
        <View style={styles.container}>
           <Menu navigation={navigation} />
           <Text style={styles.title}>Delete User</Text>

           <TextInput 
                style={styles.textInput}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setUName(text)}
                value={uname}           
           />

           <View
                style={styles.button}
           >
               <CustomButton title="Delete User" onPress={onPress} />
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
        marginTop: 50, 
        fontSize: 50, 
        fontWeight: '200',
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

export default DeleteUser; 