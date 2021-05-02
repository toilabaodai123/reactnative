import React,{useState} from 'react';
import {Button, StyleSheet,Text,View,FlatList,TouchableOpacity, Image} from 'react-native';

export default function Home({navigation}){


    const [reviews , setReviews] = useState([
        {title:'giay-xxx-den',gia:'2000000',img:require('../assets/download.png')},
        {title:'giay-yyy-trang',gia:'3000000',img:require('../assets/download.png')},
        {title:'giay-zzz-xanh',gia:'4000000',img:require('../assets/download.png')}
    ]);

    return(
        <View >
                <Text style={styles.text}>Home Screen</Text>
                <FlatList   
                    data={reviews}
                    renderItem={({item})=>(
                        <View style={styles.homeItemContainer}>
                            <TouchableOpacity  onPress={()=>navigation.navigate('ReviewDetail',item)}>
                                <Image style={styles.itemImg} source={(require('../assets/download.png'))} />
                                <Text>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
           
        </View>
    )
}

const styles =StyleSheet.create({
    text:{
        color:'red'
    },
    homeItemContainer:{
        width:'100%',
        height:300,
    },
    itemImg:{
        width:150,
        height:150
    }
})