import React, { useState } from 'react'; 
import { View, Text, TextInput, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import Menu from '../components/Menu';
import CustomButton from '../components/CustomButton';


const onPress = () => {
    console.log("add user")
}

const AddUser = ({ navigation }) => {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [uname, setUName] = useState(''); 
    const [role, setRole] = useState(''); 
    const [defaultPassowrd, setDefaultPassword] = useState('');

    return (
        <View style={styles.container}>
          <Menu navigation={navigation} />
          <Text style={styles.title}>Add User</Text>

          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setFName(text)}
            value={fname}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setLName(text)}
            value={lname}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setUName(text)}
            value={uname}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Role"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setRole(text)}
            value={role}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Default Password"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setDefaultPassword(text)}
            value={defaultPassowrd}
          />
          
          <View
            style={styles.button}
          >
                <CustomButton title="Add New User" onPress={onPress} />
          </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 30,
        marginLeft: 30
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

export default AddUser; 