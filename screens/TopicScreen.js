import  * as React from 'React';
import {Text,View,TouchableOpacity,FlatList,StyleSheet,Image} from 'react-native';
import centers from "../centerdb";




export default class TopicScreen extends React.Component{
    constructor(props) {
        super(props);
        
    }

  

      


    render(){
        return(
        <View styles={styles.container}>
          

            <FlatList
                keyExtractor={(item,index)=>index.toString()}
                data={centers}
                renderItem={({item})=>(
                  <View style={styles.subContainer}>

                 <TouchableOpacity 
                 style={styles.item}
                // onPress={()=>
                  // this.props.navigation.navigate("center",{center:item})}
>
                   <Image source={item.img} style={styles.itemImage}/>
                   <Text style={styles.itemText}>{item.name}</Text>
                   </TouchableOpacity>
                   </View>
                )}
                />

                    </View>
                )}
                 }
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"red"

  },
  item:{},

  subContainer:{
    backgroundColor:"white", 
    marginTop:20
  },
  item:{
    width:"25%",
    height: 25,
    padding:50,
    marginBottom:10,
    alignItems: "left",
    borderRadius:30,
    backgroundColor: "purple"
  },
  itemImage:{
    width:"10%",
    height:10,

  },
  itemText:{
    color:"black",
    fontSize:15,
    fontWeight:"bold"
    
    
  }
})            

        

        
    
