import React, { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';

import Menu from '../components/Menu';
import Add from '../components/Add';
import CustomButton from '../components/CustomButton';
import Camera from '../components/Camera';

const onPress = () => {
    console.log('daily install report'); 
}


const DailyInstallReport = ({ navigation }) => {

    const [siteConditions, setSiteConditions] = useState('');
    const [workToDo, setWorkToDo] = useState('');
    const [obstacles, setObstacles] = useState('');
    const [notes, setNotes] = useState('');
    const [plan, setPlan] = useState(''); 

    return (
        <>
        <View style={styles.container}>
           <Menu navigation={navigation} />
           <Text style={styles.title}>Daily Install Report</Text>
        </View>
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex : 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.scrollView}>
                <View style={styles.basicInfo}>
                    <Text>Date & Time: </Text>
                    <Text>Humidity: </Text>
                    <Text>Weather: </Text>
                </View>

                <Add title="Installer"/>

                <Text style={styles.text}>Site Conditions: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter site conditions"
                    onChangeText={text => setSiteConditions(text)}
                    value={siteConditions}
                    multiline={true}
                />

                <Camera />
                
                <Add title="Subtrades On Site"/>

                <Text style={styles.text}>Work to be completed: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter work to be completed"
                    onChangeText={text => setWorkToDo(text)}
                    value={workToDo}
                    multiline={true}
                />

                <Text style={styles.text}>Obstacles: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter obstacles"
                    onChangeText={text => setObstacles(text)}
                    value={obstacles}
                    multiline={true}
                />

                <Text style={styles.text}>Notes: </Text>    
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter notes"
                    onChangeText={text => setNotes(text)}
                    value={notes}
                    multiline={true}
                
                />

                <Camera />


                <Text style={styles.text}>Next Day Plan: </Text> 
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter next day plan"
                    onChangeText={text => setPlan(text)}
                    value={plan}
                    multiline={true}
                />

                <View
                    style={styles.button}
                >
                    <CustomButton title="Submit" onPress={onPress}/>
                </View>

                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginRight: 30
    }, 
    title: {
        fontSize: (Platform.OS === 'ios' ? 40 : 38),
        marginTop: 10,
        color: '#333'
    },
    scrollView: {
        flex: 1,
        marginLeft: 30, 
        marginRight: 30,
        marginTop: 10
    },
    text: {
        color: '#333',
        marginTop: 20
    },  
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333',
        padding: 0,
        textAlignVertical: 'top'
    },
    basicInfo: {
        marginTop: 10
    },
    button: {
        marginTop: 40,
        alignItems: 'flex-end',
        marginBottom: 50
    }

})

export default DailyInstallReport; 