import React, * as react from 'react';
import {Text,View} from 'react-native';

export default class CenterScreen extends React.Component{
    render(){
        return(
        <View styles={{flex:1,backgroundColor:"white"}}>
            <Text styles={{color:"black"}}>Center Screen</Text>

        </View>

        )
    }
}