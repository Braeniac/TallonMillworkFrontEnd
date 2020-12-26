import React, { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView, Dimensions } from 'react-native'; 
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

import Menu from '../components/Menu';
import Add from '../components/Add';
import Camera from '../components/Camera';
import CustomButton from '../components/CustomButton';


const onPress = () => {
    console.log('hello');
}

const DailyInstallReport = ({ navigation }) => {

    const sheetRef = React.useRef(null);

    const [imgs, setImage] = useState([]); 

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
          }).then(images => {
            setImage([...imgs, images]); 
            sheetRef.current.snapTo(1); 
          }).catch((error) => 
            console.warn("image error:", error)
          ); 
    }

    const chooseFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
          }).then(images => {
            console.log(images)
            setImage([...imgs, images]); 
            sheetRef.current.snapTo(1); 
          }).catch((error) => 
            console.warn("image error:", error)
          );   
    }

    const renderContent = () => (
        <View style={styles.bottomSheet}>
            <View style={{ alignItems : 'center' }}>
                <Text style={styles.bottomSheetTitle}>Upload Photo</Text>
                <Text style={styles.bottomSheetSubtitle}>Current Site Condition</Text>
            </View>
        
            <TouchableOpacity
                style={styles.panelButton}
                onPress={takePhotoFromCamera}
            >
              <Text style={styles.panelButtonTitle}>
                  Take Photo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.panelButton}
                onPress={chooseFromLibrary}
            >      
              <Text style={styles.panelButtonTitle}>
                  Choose from Library
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.panelButton}
                onPress={ () => sheetRef.current.snapTo(1) }
            >      
              <Text style={styles.panelButtonTitle}>
                  Cancel
              </Text>
            </TouchableOpacity>
        </View>
    );

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
                style={{ flex : 1}}
            >        
            <BottomSheet
                ref={sheetRef}
                snapPoints={[330, 0]}
                renderContent={renderContent}
                initialSnap={1}
                enabledGestureInteraction={false}
            /> 
                
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

                <Camera onPress={ () => sheetRef.current.snapTo(0) } />
                
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

                <Camera onPress={ () => sheetRef.current.snapTo(0) } />


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
        color: '#333',
        alignSelf: 'center'
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
    },
    bottomSheet: {
        backgroundColor: '#fff',
        padding: 16,
        height: 450,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 3,
        borderColor: 'lightgray'
    },
    bottomSheetTitle: {
        color: '#333',
        fontSize: 35,
        marginTop: 10
    }, 
    bottomSheetSubtitle: {
        color: '#333',
        marginBottom: 10
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#2D7FF3',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#fff',
    },
})

export default DailyInstallReport; 