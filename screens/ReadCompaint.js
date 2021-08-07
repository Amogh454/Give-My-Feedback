import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDKAsyA_C9hqv8KhnN-Uq3XPgOK368lGWcDpu3MT4Ms9FlYN3UTnkQBWuvnVJsf85eok&usqp=CAU" };

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>

  

                <Text style = {{fontSize:25, margin:20, justifyContent:"center", alignSelf:"center", alignContent:"center", alignItems:"center", color:"white"}}>Your FeedBack Has Been Submitted to Me Through Firestore. I Will Contact You Later.</Text>
                <Text style = {{justifyContent:"left", alignItems:"left", marginLeft:100, color:"white"}}>~Amogh P Kaushik</Text>

                
            </View>
             </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:"me.jpg",
    alignItems: 'center',
    justifyContent: 'center',
  },
   image: {
    flex: 1,
    justifyContent: "center"
  },
});