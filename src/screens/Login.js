import React, { useState } from 'react'; 
import { View, Text, TextInput, Platform, StyleSheet } from 'react-native'; 


const onPress = () => {
    console.log('login')
}

import CustomButton from '../components/CustomButton'; 

const Login = () => {

    const [username, setUserName] = useState(''); 
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subTitle}>Please sign in to continue.</Text>

            <TextInput 
                style={styles.textInput}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setUserName(text)}
                value={username}
            />
            
            <TextInput 
                style={styles.textInput}
                placeholder="Password"
                autoCapitalize="none"
                autoCompleteType="password"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={text => setPassword(text)}
                value={password}
            />
           
           <View
                style={styles.button}
           >
                <CustomButton title="Login" onPress={onPress} />
           </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: (Platform.OS === 'ios' ? 200 : 160)
    }, 
    title: {
        fontSize: 60,
        fontWeight: '200',
        color: '#333'
    },
    subTitle: {
        fontSize: (Platform.OS === 'ios' ? 30 : 26),
        fontWeight: '200',
        marginTop: 10,
        marginBottom: 10,
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

export default Login; 