import React, * as react from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
 

export default class MainScreen extends React.Component{
    render(){
        return(
        <View styles={styles.container}>
            

           <TouchableOpacity 
           style={styles.mbtn}
           onPress={()=>{this.props.navigation.navigate("Topics")}}

          >
               <Text style={styles.mtxt}>Click To see the Topics</Text>
          </TouchableOpacity>
        </View>

        )
    }
}

var styles =StyleSheet.create({
    mbtn:{ width:"100%",
            height: 25,
            padding:50,
            marginBottom:10,
            alignItems: "center",
            borderRadius:30,
            backgroundColor: "pink"

    },
    mtxt:{
        color: "black",
        fontSize: 20,
        fontWeight:"bold",

    },
    container:{
        flex:1,
        backgroundColor:"grey",
        justifyContent:"center",
        alignItems:"center",
    },


})

