import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, StyleSheet, Dimensions, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 


const InstallersModal = ({ modalVisible, setModalVisable, title, DATA, setFunction }) => {

    const [installers, setInstallers] = useState(DATA);
    const [input, setInput] = useState('');  

    console.log('from modal: ' + installers); 

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }
            }
        >
            <View style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.title}>{title}</Text>
                    <KeyboardAwareScrollView
                        style={{
                            display: "flex",
                            flex: 1,
                            height: Dimensions.get("window").height,
                            width: Dimensions.get("window").width,
                        }}
                    >
                         
                        <View style={{ marginLeft: 10, marginTop: 10 }}>      
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add installer"
                                onChangeText={text => setInput(text)}
                                autoCorrect={false}
                                value={input}
                            />
                            
                        </View>

                    <View style={{ flexDirection:'row', justifyContent: 'center', bottom: 0 }}>
                    <TouchableOpacity
                        onPress={() => setModalVisable(!modalVisible)}
                    >
                        <Text style={styles.cancelButton}>Cancel</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => 
                            {
                                if (input === "") {
                                    Alert.alert('', 'Please try again...')
                                    setInput('')
                                } else {
                                    setInstallers(oldArray => [...oldArray, input])
                                    setInput('')
                                }
                            }
                        }
                    >
                        <Text style={styles.OKButton}>Add</Text>
                    </TouchableOpacity>
                    



                    <TouchableOpacity
                        onPress={() => {
                            setFunction(DATA.concat(installers))
                            setModalVisable(!modalVisible)
                            setInstallers([])
                        }}
                    >
                        <Text style={styles.OKButton}>Done</Text>
                    </TouchableOpacity>
                    </View>
                    </KeyboardAwareScrollView>
                   
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    inner: {
        width: '100%',
        height: '100%',
        top: 0,
        position: 'absolute',
        backgroundColor: '#fff',
    },
    title: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 30,
        fontWeight: '200',
        marginTop: 50,
        color: '#333'
    }, 
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333',
        padding: 0,
        marginHorizontal: 20,
        marginBottom: 20
    },
    cancelButton: {
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 20,
        color: '#333',
        paddingHorizontal: 20,
    },
    OKButton: {
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 20,
        color: '#333', 
        paddingHorizontal: 20
    }
})

export default InstallersModal; 