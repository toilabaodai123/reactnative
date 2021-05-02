import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

export default function reviewDetails({navigation}){



    return(
        <View>
            <Text style={styles.text}>ReviewDetails Screen</Text>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('gia')}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    text:{
        color:'red'
    }
})