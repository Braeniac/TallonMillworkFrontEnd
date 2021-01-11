import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'; 
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'; 
import { useIsFocused } from '@react-navigation/native'
//components 
import Menu from '../components/Menu';
import Report from '../components/HomePage/Report'; 
//arrow image 
import right from '../assets/icons/right.png'; 
import refresh from '../assets/icons/refresh.png'
//redux
import { useSelector, useDispatch } from 'react-redux';
import { allActiveProjects} from '../redux/actions/projectAction';
import { retrieveReportByID,  } from '../redux/actions/reportAction';

const HomeScreen = ({ navigation }) => {

    const [projects, setProjects] = useState([]); 
    const [modalVisible, setModalVisable] = useState(false); 
    const [pid, setPID] = useState(0); 
    const [pname, setPName] = useState('');

    const { token, isLoggedIn, user } = useSelector(state => state.auth)
    const { allProjects } = useSelector(state => state.project)
    const dispatch = useDispatch(); 

    //update page 
    const isFocused = useIsFocused()

    useEffect(() => {
        //get all projects 
        dispatch(allActiveProjects(token))
        //store projects in setProjects 
        setProjects(allProjects)

    } , [isFocused])

    return (
     
        <View style={styles.container}>
        {!(isLoggedIn) ? null : 
            <ScrollView>
                <Menu navigation={navigation} />

                <View style={{ flexDirection : 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Projects </Text>  
                    <TouchableOpacity
                        onPress={() => {
                            //get all projects 
                            dispatch(allActiveProjects(token))
                            //store projects in setProjects 
                            setProjects(allProjects)
                        }}
                    >
                        <Image 
                            source={refresh}
                            style={{ marginTop: 34, marginRight: 20 }}
                        />
                    </TouchableOpacity>
                </View>
            
                {(projects) ? projects.slice(0).reverse().map((d, i) => {
                        return(
                            <View style={{ marginRight: 20 }}>
                                <TouchableOpacity
                                    style={styles.project}
                                    onPress={() => {
                                        setPName(d.pname)
                                        dispatch(retrieveReportByID(token, d.pid))
                                        setModalVisable(!modalVisible)
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                                        <Text style={styles.projectText}>{d.pname}</Text>
                                        <Image 
                                            source={right}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }) : null}

                    <Report
                        modalVisible={modalVisible}
                        setModalVisable={setModalVisable}
                        title="Daily Install Reports"
                        pname={pname}
                        pid={pid}
                        token={token}

                    />

            </ScrollView> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    },
    title: {
        fontSize: 35,
        fontWeight: '200',
        marginTop: 30,
        marginBottom: 30,
    },
    project: {
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgray'
    },
    projectText: {
        fontSize: 15,
        paddingLeft: 10,
        paddingTop: 7
    }
})

export default HomeScreen; 