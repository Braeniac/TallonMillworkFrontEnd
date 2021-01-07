import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 


import Menu from '../components/Menu'; 
import CustomButton from '../components/CustomButton';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addNewProject } from '../redux/actions/projectAction'; 

const AddProject = ({ navigation }) => {

    const [project, setProject] = useState('');

    const { token } = useSelector(state => state.auth); 
    const { error } = useSelector(state => state.project); 

    
    const dispatch = useDispatch(); 


    //authentication error message -- if user fails to sign in
    const renderError = () => {
        if (error) { 
            return(
                <View style={{ paddingTop: 10 }}>
                    <Text style={{ color : 'red' }}>{error}</Text>
                </View>
            )
        }
    }


  
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

             {renderError()}

             <View
                style={styles.button}
             >
                 {/* <CustomButton 
                    title="Add Project" 
                    onPress={() => {
                        console.log('button pressed' + project)
                        
                        dispatch(addNewProject({ project,  token })) 
                            
                        
                        
                    }}
                /> */}

                <TouchableOpacity
                    onPress={ () =>  dispatch(addNewProject(project, token)) }
                >

                    <Text>Add Project</Text>

                </TouchableOpacity>

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