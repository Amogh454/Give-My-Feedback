import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert , Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import db from '../config';
import * as firebase from 'firebase';

export default class WriteComplaint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      student: '',
      query: '',
    };
  }
  initializeComps = async () => {
    firebase.firestore().collection('complaints').add({
      title: this.state.title,
      student: this.state.student,
      query: this.state.query,
    });
  };
  submitQuery = async () => {
    var compMessage;
    firebase
      .firestore()
      .collection('complaints')
      .doc(this.initializeComps())
      .get()
      .then((doc) => {
        var comps = doc.data();
        if (comps) {
          this.initializeComps();
          compMessage = 'Complain submitted successfully!';
        }
        
      });

    this.setState({
      title: '',
      student: '',
      query: '',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#E63946'}
          centerComponent={{
            text: 'My Feedback',
            style: { color: 'black', fontSize: 20, fontWeight: 'bold' },
          }}
        />
        <Image
            style={styles.me}
            source={require('../me.jpg')}
          />
        
        <Text></Text>
        <TextInput
          placeholder="Breef Intro"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          value={this.state.title}
          style={styles.title}
        />
        <TextInput
          placeholder="Your Name"
          onChangeText={(text) => {
            this.setState({
              student: text,
            });
          }}
          value={this.state.student}
          style={styles.author}
        />
        <TextInput
          placeholder="Tell some words about me like/dislike all...Help me change myself if I am wrong"
          onChangeText={(text) => {
            this.setState({
              query: text,
            });
          }}
          value={this.state.query}
          style={styles.storyText}
          multiline={true}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitQuery}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    height: 40,
    borderWidth: 2,
    //marginTop: 40,
    margin: 10,
    color: 'black',
    padding: 6,
  },
  author: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#1D3557',
    width: 80,
    height: 40,
    color: 'black',
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  me:{
    width:100,
    height:60,
    margin:10,
  //  marginTop:30,
    justifyContent:"center",
    alignContent:"center",
    alignSelf:"center"
  }
});
