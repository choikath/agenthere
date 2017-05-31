import React from 'react';
import { ScrollView, StyleSheet, View, Text, Animated, TextInput, Button, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import Communications from 'react-native-communications';

import { ExpoLinksView } from '@expo/samples';
import Animation from 'lottie-react-native';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default class AppreciationScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: "2672173215",
      url: "https://www.pennhighfive.com/#/compliments/new/2",
    };
  }


  static route = {
    navigationBar: {
      title: 'Feeling grateful?',
    },
  };

onButtonPress(){
  const { phone } = this.props;

  Communications.text("2672173215", `Dear bananaphone, Please send a bananagram to [recipient name] from [your name] with message [ex. thanks a bunch!]`);
}

onHiFiveButtonPress() {
  const { url } = this.props;
  Linking.openURL("https://www.pennhighfive.com/#/compliments/new/2").catch(err => console.error('An error occurred, err'));
}

componentDidMount() {
  this.animation.play()
}

  render() {
    // const { currentUser } = firebase.auth();


    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <View style={[styles.container, styles.userModal]}>
           {/*<View style={{flexDirection:"row", justifyContent:"space-around", alignItems: "center"}} >
            <Text style={styles.sectionHeader}>Share your appreciation!</Text>

               <FontAwesome
                 name="smile-o"
                 size={32}
                 color='#cornflowerblue' />
                 </View>*/}


                 <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems: "center"}} >

               <Text style={styles.sectionHeader}></Text>




                <View style={{position:'absolute'}}>

               <Animation
                  ref={animation => { this.animation = animation; }}
                  style={{
                   width: 100,
                   height: 100,
                 }}
                 source={require('../node_modules/lottie-ios/pencil_write.json')}
                 />
                 </View>



                  </View>
                  <View style={styles.containerStyle}>
                  <Card>
                  <View style={{flexDirection:"column", alignItems:"center"}}>
                  <Text style={styles.para}>Send a bananagram</Text>
                  <Text style={styles.userText}>(On the next pop-up day)</Text>


                  <Button
                  raised
                  backgroundColor="cornflowerblue"
                  onPress={() => this.onButtonPress()}
                  iconRight
                  title="Text the bananaphone" />
                  </View>
                  </Card>

                  <Card>
                  <View style={{flexDirection:"column", alignItems:"center"}}>
                  <Text style={styles.para}>Send a High Five</Text>

                  <Text style={styles.userText}>(To any Penn resident)</Text>
                  <Button
                  raised
                  backgroundColor="cornflowerblue"
                  onPress={() => this.onHiFiveButtonPress()}
                  iconRight
                  title="Send a High Five" />
                  </View>
                  <Ionicons
                    name="ios-hand"
                    size={25}
                    color='gray' />
                  </Card>
                  </View>

               </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    //  justifyContent: "center",
    //    alignItems: "center",
    backgroundColor: '#FFC107'
  },
  containerStyle: {

  },
  dateHeader: {
    fontSize: 16,
    fontFamily: 'Avenir-Light',
    color:'darkgray'
  },
  homeScene: {
    flex: 1,
    paddingHorizontal: 20
  },
  attendanceModal: {
    padding:30,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  section: {
    marginTop: 20
  },
  title: {
    fontFamily: 'Avenir-Light',
    fontSize: 36,
    marginBottom: 20,
    textAlign: "center",
    color: "cornflowerblue"
  },
  sectionHeader: {
    fontFamily: 'Avenir-Light',
    fontSize: 24,
    marginVertical: 10
  },

  userText: {
    fontFamily: 'Avenir-Light',
    fontSize: 16,
    fontStyle: "italic",
    color:'gray'
  },
  userKnownText: {
    fontFamily: 'Avenir-Light',
    fontSize: 16,
    color: "cornflowerblue"
  },

  userModal: {
    padding: 20
  },
  userModalActions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  para: {
    flex:1,
    fontFamily: 'Avenir-Light',
    fontSize: 16
  },
  userInput: {
    fontFamily: 'Avenir-Light',
    width: 300,
    height: 40,
    padding: 5,
    margin: 20
  },
  userInputLabel: {
    fontFamily: 'Avenir-Light',
    fontSize: 16,

  },
  heartOverlap: {
    position: 'absolute',
    marginLeft: 50,

  }

});
