import React, { useState } from 'react'; 
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';

import Menu from '../components/Menu';
import CustomButton from '../components/CustomButton';

const onPress = () => {
    console.log('daily install report '); 
}

const DailyInstallReport = ({ navigation }) => {

    const [user, setUser] = useState('');

    return (
        <>
        <View style={styles.container}>
           <Menu navigation={navigation} />
           <Text style={styles.title}>Daily Install Report</Text>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.basicInfo}>
                    <Text>Date & Time: </Text>
                    <Text>Humidity: </Text>
                    <Text>Weather: </Text>
                </View>
       
           

                

            </ScrollView>
        </SafeAreaView>
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
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333'
    },
    basicInfo: {
        marginTop: 10
    }

})

export default DailyInstallReport; 