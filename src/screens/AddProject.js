import React from 'react'; 
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

const AddProject = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <Menu navigation={navigation} />
             <Text>add project</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20 
    }, 
})

export default AddProject; 