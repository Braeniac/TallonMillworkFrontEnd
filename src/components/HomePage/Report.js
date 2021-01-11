import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, ScrollView, StyleSheet} from 'react-native';
import { useIsFocused } from '@react-navigation/native'; 
import { useSelector, useDispatch } from 'react-redux';

const Report = ({ modalVisible, setModalVisable, pname}) => {
    
    const { report } = useSelector(state => state.report)

    const dispatch = useDispatch(); 


    const [siteSupervisor, setSiteSupervisor] = useState(0); 
    const [completedBy, setCompletedBy] = useState(0);
    const [installers, setInstallers] = useState('');
    const [subtradesOnSite, setSubtradesOnSite] = useState('');

    

    //update page 
    const isFocused = useIsFocused()

    useEffect(() => {
        if (report.length > 0) {
            report.map((d, i) => {
                //get users by id
                //get subtrades, 
                //get installers, 
                
            })
        }
    }, [isFocused])

    
    

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
                    <Text style={styles.title}>{pname}</Text>
                    
                    <ScrollView>

                    {(report.length > 0) ? report.map((d,i) => {
                        key={i}
                            return(
                                <View style={{ marginBottom: 20, marginHorizontal: 20, borderBottomWidth: 1, paddingVertical: 20}}>
                                    <Text style={styles.textTitle}>{d.rname}</Text>
                                    <Text style={{ paddingVertical : 10 }}>Date: {d.date.substring(0, 10)}</Text>
                                    <Text style={{ paddingVertical : 10 }}>Time: {d.date.substring(11, 19)}</Text>
                                    <Text style={styles.text}>Humidity: {d.humidity}%</Text>
                                    <Text style={styles.text}>Temperature: {d.weather}{'\u00b0'}C</Text>
                                    <Text style={styles.text}>Project: {pname}</Text>
                                    <Text style={styles.text}>Installers: </Text>
                                    <Text style={styles.text}>Site Conditions: {d.siteConditions}</Text>
                                    <Text style={styles.text}>Subtrades on site: </Text>
                                    <Text style={styles.text}>Work to be completed: {d.toDo}</Text>
                                    <Text style={styles.text}>Obstacles: {d.obstacles}</Text>
                                    <Text style={styles.text}>Notes: {d.notes}</Text>
                                    <Text style={styles.text}>Next Day Plan: {d.nextDayPlan}</Text>
                                    <Text style={styles.text}>Site Supervisor: </Text>
                                    <Text style={styles.text}>Completed By: </Text>
                                </View>
                            )
                        }) : 
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 50}}>Sorry, no reports available!</Text>
                        </View>
                    }

                    <TouchableOpacity
                        style={{ marginTop: 20,  marginBottom: 50, marginTop: 0 }}
                        onPress={() => {
                            setModalVisable(!modalVisible)
                            dispatch({ type : 'reset_report' })
                            
                        }}
                    >
                        <Text style={styles.buttonText}>Go back</Text>
                    </TouchableOpacity>

                    </ScrollView>
                    
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        color: '#333',
        marginHorizontal: 20,
        textAlign: 'center'
    },
    textTitle: {
        fontSize: 20, 
        paddingBottom: 20,
        textAlign: 'center'
    },
    text: {
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20
    }
   
})

export default Report; 