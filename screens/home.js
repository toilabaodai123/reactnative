import React,{useState} from 'react';
import {Button, StyleSheet,Text,View,FlatList,TouchableOpacity} from 'react-native';

export default function Home({navigation}){


    const [reviews , setReviews] = useState([
        {title:'giay-xxx-den',gia:'2000000'},
        {title:'giay-yyy-trang',gia:'3000000'},
        {title:'giay-zzz-xanh',gia:'4000000'}
    ]);

    return(
        <View>
            <Text style={styles.text}>Home Screen</Text>
            <FlatList   
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetail',item)}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles =StyleSheet.create({
    text:{
        color:'red'
    }
})