import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 


import Menu from '../components/Menu'; 
import CustomButton from '../components/CustomButton';

const onPress = () => {
    console.log('Add project'); 
}

const AddProject = ({ navigation }) => {

    const [project, setProject] = useState(''); 

    return (
        <View style={styles.container}>
             <Menu navigation={navigation} />
             <Text style={styles.title}>Add Project</Text>
             <TextInput
                style={styles.textInput}
                placeholder="Add New Project"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setProject(text)}
                value={project}
             />
             <View
                style={styles.button}
             >
                 <CustomButton title="Add Project" onPress={onPress}/>
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20 
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

export default AddProject; 