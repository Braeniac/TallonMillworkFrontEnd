import React, { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, SafeAreaView, Modal, Alert,TouchableOpacity, Dimensions } from 'react-native'; 
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 
import { ScrollView } from 'react-native-gesture-handler';

//camera -- upload pre/post images 
import Camera from '../components/dailyInstallReport/Camera';
import CameraModal from '../components/dailyInstallReport/CameraModal';

//add -- for installers, subtrades on site 
import Add from '../components/dailyInstallReport/Add';
import Menu from '../components/Menu';
//submit button
import CustomButton from '../components/CustomButton';
//CustomPicker for projects, site supervisor, completed by
import CustomPicker from '../components/dailyInstallReport/CustomPicker'; 

//checkboxmodal for installers and subtrades on site 
import AddModal from '../components/dailyInstallReport/AddModal';
import ReactChipsInput from 'react-native-chips';

const onPress = () => console.log('form submited')


const DailyInstallReport = ({ navigation }) => {

    // DELETE --------------------------------------------------------------------------------


    //delete later! 
    const projects = [
        {
            key  : 1,
            name : 'Brock University kitchen'
        },
        {
            key  : 2,
            name : 'Bramlea city center food court'
        },
        {
            key  : 3,
            name : 'Walmart McDonalds'
        },
        {
            key  : 4,
            name : 'Square one food court'
        },
        {
            key  : 5,
            name : 'Metro kitchen'
        },
        {
            key  : 6,
            name : 'Eaton center food court'
        }
    ]

    //delete later!
    const siteSupervisors = [
        {
            key  : 11,
            name : 'Vince Carter'
        },
        {
            key  : 21,
            name : 'Kevin Durant'
        },
        {
            key  : 31,
            name : 'Kobe Bryant'
        },
        {
            key  : 41,
            name : 'Michael Jordan'
        },
        {
            key  : 51,
            name : 'Stephen Curry'
        },
        {
            key  : 61,
            name : 'LeBron James'
        }
    ]

    //delete later!
    const listcompletedBy = [
        {
            key  : 10,
            name : 'Richard Hendricks'
        },
        {
            key  : 12,
            name : 'Big Head'
        },
        {
            key  : 13,
            name : 'Erlich Bachman'
        },
        {
            key  : 14,
            name : 'Jian Yang'
        },
        {
            key  : 15,
            name : 'Dinesh Chugtai'
        },
        {
            key  : 16,
            name : 'Bertram Gilfoyle'
        }
    ]


    // --------------------------------------------------------------------------------------------

    const [project, setProject] = useState('Project');
    const [installers, setInstallers] = useState([]);
    const [subtradesOnSite, setSubtradesOnSite] = useState([]);

    const [siteConditions, setSiteConditions] = useState('');
    const [workToBeCompleted, setWorkToBeCompleted] = useState('');
    const [obstacles, setObstacles] = useState('');
    const [notes, setNotes] = useState('');
    const [nextDayPlan, setNextDaysPlan] = useState('');

    const [siteSupervisor, setSiteSupervisor] = useState('Site Supervisor');
    const [completedBy, setCompletedBy] = useState('Completed By');

    // MODAL --------------------------------------------------------------------------------

    //modal installers 
    const [installersModal, setInstallersModal] = useState(false);
    //modal subtrades on site 
    const [subtradesOnSiteModal, setSubtradesOnSiteModal] = useState(false);
    //modal projects
    const [modalVisible, setModalVisible] = useState(false);
    //modal site supervisor 
    const [siteSupervisorModal, setSiteSuperVisorModal] = useState(false); 
    //modal completed by
    const [completedByModal, setCompletedByModal] = useState(false);


    // CAMERA --------------------------------------------------------------------------------

    //TODO !!!!!!!!!!!!!!!!
    // _ store images 
    

    //camera modal 
    const [cameraModal, setCameraModal] = useState(false); 

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
        }).then(images => {
            console.log(images)
            setCameraModal(!cameraModal)
        }).catch((error) => 
            console.warn("Image error:", error)
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
            setCameraModal(!cameraModal)
          }).catch((error) => 
            console.warn("Image error:", error)
          );   
    }

    // -------------------------------------------------------------------------------------------

    return(
        <>
            <View style={styles.menu}>
                <Menu navigation={navigation} />
            </View>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Daily Install Report</Text>
                    <KeyboardAwareScrollView
                        style={{
                            display: "flex",
                            flex: 1,
                            height: Dimensions.get("window").height,
                            width: Dimensions.get("window").width,
                        }}
                    >
                    <View style={{ marginHorizontal: 20 }}>  

                    <TouchableOpacity
                        onPress={ () => setModalVisible(!modalVisible) }
                        style={{borderColor: '#333', borderBottomWidth: 2, paddingBottom: 10, marginTop: 10}}
                    >
                        <Text style={{ color: '#333' }}>{project}</Text>
                    </TouchableOpacity>

                    <CustomPicker 
                        modalVisible={modalVisible}
                        setModalVisable={setModalVisible}
                        title="List of projects"
                        DATA={projects}
                        setFunction={setProject}
                        itemType="name"
                    />

                    <Add 
                        title="Installers" 
                        onPress={() => {
                            setInstallersModal(!installersModal)    
                        }}
                    />

                    <AddModal 
                        modalVisible={installersModal}
                        setModalVisable={setInstallersModal}
                        title="Installers"
                        setFunction={setInstallers}
                        DATA={installers}
                        type="Add Installers"
                    />

                    { (installers.length === 0) ? null :
                        <View>
                            <ReactChipsInput 
                                label="Installers added: " 
                                initialChips={installers} 
                                onChangeChips={
                                   chips => setInstallers([].concat(chips))
                                }
                                alertRequired={true} 
                                chipStyle={{ 
                                    borderColor: '#333', 
                                    backgroundColor: '#fff' 
                                }} 
                                inputStyle={{fontSize: 22}} 
                                labelStyle={{ color: '#333'}} 
                                labelOnBlur={{ color: '#333' }} 
                                labelStyle={{ fontSize: 15, color: '#333' }}
                            />
                        </View>
                    }

                    <Text style={styles.text}>Site conditions: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter site conditions"
                        onChangeText={text => setSiteConditions(text)}
                        value={siteConditions}
                        multiline={true}
                    />
                    
                    <Camera onPress={ () => {
                            setCameraModal(!cameraModal); 
                        }}
                    />

                    <CameraModal 
                        modalVisible={cameraModal}
                        setModalVisible={setCameraModal}
                        takePhotoFromCamera={takePhotoFromCamera}
                        chooseFromLibrary={chooseFromLibrary}
                        title="Pre-Site Conditions"
                    /> 

                    <Add 
                        title="Subtrades on site" 
                        onPress={() => {
                            setSubtradesOnSiteModal(!subtradesOnSiteModal)
                        }} 
                    />

                    <AddModal
                        modalVisible={subtradesOnSiteModal}
                        setModalVisable={setSubtradesOnSiteModal}
                        title="Subtrades on site"
                        DATA={subtradesOnSite}
                        setFunction={setSubtradesOnSite}
                        type="Add subtrades on site"
                        description="Here are a few examples: Framing, plumbing, electrical, flooring, drywall, painters..."
                    />

                    { (subtradesOnSite.length === 0) ? null :
                        <View>
                            <ReactChipsInput 
                                label="Installers added: " 
                                initialChips={subtradesOnSite} 
                                onChangeChips={
                                   chips => setSubtradesOnSite([].concat(chips))
                                }
                                alertRequired={true} 
                                chipStyle={{ 
                                    borderColor: '#333', 
                                    backgroundColor: '#fff' 
                                }} 
                                inputStyle={{fontSize: 22}} 
                                labelStyle={{ color: '#333'}} 
                                labelOnBlur={{ color: '#333' }} 
                                labelStyle={{ fontSize: 15, color: '#333' }}
                            />
                        </View>
                    }
                    

                    <Text style={styles.text}>Work to be completed: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter work that needs to be completed"
                        onChangeText={text => setWorkToBeCompleted(text)}
                        value={workToBeCompleted}
                        multiline={true}
                    />

                    <Text style={styles.text}>Obstacles: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter obstacles faced"
                        onChangeText={text => setObstacles(text)}
                        value={obstacles}
                        multiline={true}
                    />

                    <Text style={styles.text}>Notes: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter extra notes"
                        onChangeText={text => setNotes(text)}
                        value={notes}
                        multiline={true}
                    />
                    
                    <Camera onPress={ () => {
                            setCameraModal(!cameraModal); 
                        }}
                    />

                    <CameraModal 
                        modalVisible={cameraModal}
                        setModalVisible={setCameraModal}
                        takePhotoFromCamera={takePhotoFromCamera}
                        chooseFromLibrary={chooseFromLibrary}
                        title="Post-Site Conditions"
                    />
                    
                    <Text style={styles.text}>Next day plan: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter what needs to be done"
                        onChangeText={text => setNextDaysPlan(text)}
                        value={nextDayPlan}
                        multiline={true}
                    /> 

                    <TouchableOpacity
                        onPress={ () => setSiteSuperVisorModal(!siteSupervisorModal) }
                        style={{borderColor: '#333', borderBottomWidth: 2, paddingBottom: 10, marginTop: 50}}
                    >
                        <Text style={{ color: '#333' }}>{siteSupervisor}</Text>
                    </TouchableOpacity>

                    <CustomPicker 
                        modalVisible={siteSupervisorModal}
                        setModalVisable={setSiteSuperVisorModal}
                        title="List site supervisors"
                        DATA={siteSupervisors}
                        setFunction={setSiteSupervisor}
                    />

                    <TouchableOpacity
                        onPress={ () => setCompletedByModal(!completedByModal) }
                        style={{borderColor: '#333', borderBottomWidth: 2, paddingBottom: 10, marginTop: 50}}
                    >
                        <Text style={{ color: '#333' }}>{completedBy}</Text>
                    </TouchableOpacity>

                    <CustomPicker 
                        modalVisible={completedByModal}
                        setModalVisable={setCompletedByModal}
                        title="Completed by"
                        DATA={listcompletedBy}
                        setFunction={setCompletedBy}
                        itemType="name"
                    /> 

                    <View
                        style={styles.button}
                    >
                        <CustomButton title="Submit" onPress={onPress} />
                    </View>

                    </View> 
                    </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 60
    },
    menu: {
        marginHorizontal: 20
    },  
    title: {
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: '200',
    },
    text: {
        color: '#333',
        marginTop: 20,
    },  
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333',
        padding: 0,
        textAlignVertical: 'top',
    },
    button: {
        marginTop: 40,
        alignItems: 'flex-end'
    }
})

export default DailyInstallReport; 
