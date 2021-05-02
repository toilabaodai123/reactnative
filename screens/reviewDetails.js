import React from 'react';
import {StyleSheet,Text,View,Button, Image} from 'react-native';

export default function reviewDetails({navigation}){

    const imgurl = navigation.getParam('img');

    return(
        <View>
            <Text style={styles.text}>ReviewDetails Screen</Text>
            <Image source={imgurl}/>
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