import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import cam from '../assets/icons/cameraIcon.png'; 

const Camera = () => {
    return(
        <View style={styles.container}>
            <View>
            <TouchableOpacity
                onPress={ () => console.log('take picture') }
            >
                <Image
                    // style={styles.menu}
                    source={cam} 
                />
            </TouchableOpacity>
            </View>
            <Text style={{ color : '#333' }}>Upload Image</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})

export default Camera; 