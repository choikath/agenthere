import React from 'react';
import { ScrollView, StyleSheet, Button, Text, View, Linking } from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import Communications from 'react-native-communications';
import { ExpoConfigView } from '@expo/samples';
import firebase from 'firebase';
import moment from 'moment';
import Animation from 'lottie-react-native';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';

export default class IdeasScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Idea Wishlist',
    },
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: "",
  //     time: moment(),
  //     location: "",
  //     code: "",
  //     topic: "",
  //     presenter: "",
  //     pdf: "",
  //     evaluations: [],
  //   };
  // }
  _renderIcon(name) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color='cornflowerblue' />
    );
  }

  componentDidMount() {
    this.animation.play()
  }

  onButtonPress() {
    Communications.text("6143972666", `Hi Agent team, I wish I knew when... [ex. my patients were discharged]`);
  }

  openInsta() {
    Linking.openURL("https://www.instagram.com/pennbananagram/").catch(err => console.error('An error occurred, err'));
  }

  render() {
    var list = require('../components/confdata.json');

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        {/* Go ahead and delete ExpoConfigView and replace it with your
           * content, we just wanted to give you a quick view of your config */}
           <View style={styles.welcomeContainer}>
           <Text style={styles.paraWhite}>Upvote the ideas you care about most:</Text>
           <Text style={styles.sectionHeader}></Text>

          {/*<List containerStyle={{flex:1, marginBottom: 20}}>
          {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
            />
          ))
          }
          </List>*/}
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

        </View>

        <Card>
        <View style={{flexDirection:"column", alignItems:"center"}}>
        <Text style={styles.para}>[eugyev] Alert when radiology results are back</Text>
        <Text></Text>
        </View>
        <View style={{flexDirection:"row", alignItems:"flex-start"}}>
        <EvilIcons
          name="chevron-up"
          size={30}
          color='gray' />
          <Text style={{color:"lightgray"}}>32 votes</Text>
        </View>

        </Card>

        <Card>
        <View style={{flexDirection:"column", alignItems:"center"}}>
        <Text style={styles.para}>Tell us about other needs to add to the list!</Text>
        <Button
        raised
        backgroundColor="cornflowerblue"
        onPress={() => this.onButtonPress()}
        iconRight
        title="Submit your idea" />
        </View>
        <FontAwesome
          name="plus"
          size={20}
          color='gray' />
        </Card>

        <Card>
        <View style={{flexDirection:"column", alignItems:"center"}}>
        <Text style={styles.para}>Give input on the newest features before they launch</Text>


        <Button
        raised
        backgroundColor="cornflowerblue"
        onPress={() => this.openInsta()}
        iconRight
        title="View the latest" />
        </View>
        <FontAwesome
          name="instagram"
          size={25}
          color='gray' />
        </Card>



      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumvioletred',
  },
  sectionHeader: {
    fontFamily: 'Avenir-Light',
    fontSize: 24,
    marginVertical: 10
  },
  welcomeContainer: {
    flex:1,
    alignItems: 'flex-start',
    marginTop: 5,
    padding:20,
    marginBottom: 20,
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
  para: {
    flex:1,
    fontFamily: 'Avenir-Light',
    fontSize: 16
  },
  paraWhite: {
    flex:1,
    fontFamily: 'Avenir-Light',
    fontSize: 16,
    color: 'white'
  },
  paraPink: {
    flex:1,
    fontFamily: 'Avenir-Light',
    fontSize: 16,
    color: 'pink'
  },
});
