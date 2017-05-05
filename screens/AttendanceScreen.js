import React from 'react';
import { ScrollView, StyleSheet, View, Text, Animated, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import Animation from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';


export default class LinkScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentcode: "",

    };
  }


  static route = {
    navigationBar: {
      title: 'My Attendance',
    },
  };

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
           <View style={{flexDirection:"row", justifyContent:"space-around", alignItems: "center"}} >
            <Text style={styles.sectionHeader}>Conference #1</Text>

               <FontAwesome
                 name="check"
                 size={32}
                 color='#00FC88' />
                 </View>
                 <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems: "center"}} >

               <TextInput id="currentCode" placeholder="Type code"/>
               <Text style={styles.sectionHeader}></Text>




                <View style={{position:'absolute'}}>

               <Animation
                  ref={animation => { this.animation = animation; }}
                  style={{
                   width: 300,
                   height: 200,
                 }}
                 source={require('../node_modules/lottie-ios/love.json')}
                 />
                 </View>
                 <View style={styles.heartOverlap}>
                 <FontAwesome
                   name="heart"
                   size={24}
                   color='#00FC88'
                  onPress={() => this.animation.play()}  />
                  </View>

                  </View>
                  <View style={styles.containerStyle}>
                  <Card>
                  <View style={{flexDirection:"column", alignItems:"center"}}>
                  <Text style={styles.para}>Lisa Bellini, MD.</Text>
                  <Text style={styles.userText}>(Maloney 5)</Text>
                  <Text style={styles.userText}>Hoagies</Text>
                  <Text style={styles.para}></Text>
                  <FontAwesome
                    name="file-o"
                    size={60}
                    color='lightgray' />
                    <Text style={styles.para}>PDF, PPT</Text>
                    <Text style={styles.para}></Text>

                  </View>
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
    backgroundColor: '#F4F8F9'
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
