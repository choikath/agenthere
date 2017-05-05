import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Modal,
  TextInput,
} from 'react-native';


import { MonoText } from '../components/StyledText';
import { FontAwesome } from '@expo/vector-icons';
import moment from "moment";
import { Button, Card, List, ListItem } from 'react-native-elements';
import Animation from 'lottie-react-native';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      userId: null,
      unsavedUserId: null,
      loginModalVisible: true,
      userModalVisible: false,
      loadingVisible: false,

    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 20,
      duration: 20000,
    }).start();
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  };


  _renderIcon(name) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color='cornflowerblue' />
    );
  }

  saveUser() {
    this.setState({
      userId: this.state.unsavedUserId,
      userModalVisible: false,
      initialRoute: "attendance"
    });
  }

  changeUser() {
    this.setState({ userModalVisible: true });
  }

  renderUser() {
      if (!this.state.userId)
        return (
          <View>
          <Text style={styles.userText}>You're not yet signed in!</Text>
          <Text />
          <Button
          raised
          backgroundColor="cornflowerblue"
          onPress={() => this.changeUser()}
          iconRight
          title="Sign in" />
        </View>
      );

    return (
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
        <Text style={styles.userKnownText}>{this.state.userId}</Text>
        <Button
        backgroundColor="transparent"
        icon={{name:'edit', color:'gray'}}
        onPress={() => this.changeUser()}
        />

      </View>
    );
  }



  render() {
    const list = [
      {
        title: 'Attendance',
        icon: 'done',

      },
      {
        title: 'Notes',
        icon: 'edit',

      },
    ]

    const conflist = [
      {
        title: 'Physician Burnout',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        speaker: 'Oana Tomescu',
        date: '04/12/17',
        link: 'http://google.com',
        pdf: 'file.pdf',
        evals: 'http://forms.google.com/',
        attendees: [ ]
      },
      {
        title: 'Penn Medicine Focus on Finance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        speaker: 'Beth Johnston',
        date: '04/12/17',
        link: 'http://google.com',
        pdf: 'file.pdf',
        evals: 'http://forms.google.com/',
        attendees: [ ],
        food: "indian",
      },
      {
        title: 'Mean Girls',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        speaker: 'Rachel McAdams',
        date: '04/12/17',
        link: 'http://google.com',
        pdf: 'file.pdf',
        evals: 'http://forms.google.com/',
        attendees: [ ],
        food: "hoagies"
      },
    ]

    return (
      <View style={styles.container}>


        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>




          <View style={styles.welcomeContainer}>




          <Text style={styles.title}>AgentNow</Text>
          <Text style={styles.dateHeader}> {moment().format('dddd MMM Do YYYY')} </Text>
          <View style={styles.section}>
          <Card>
            <Text style={styles.sectionHeader}>Hi there!</Text>
            {this.renderUser()}


            </Card>
          </View>


          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

          </View>


        </ScrollView>

        <Modal
        visible={this.state.loadingVisible}
        animationType={"none"}
        transparent={false}
        >
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Animation
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../node_modules/lottie-ios/location_pin.json')}
          progress={this.state.progress} />

        </View>
        </Modal>

        <Modal
          visible={this.state.userModalVisible}
          animationType={"slide"}
          transparent={false}
        >
        <View style={[styles.container, styles.userModal]}>
            <Text style={styles.sectionHeader}>Your User ID</Text>
            <Text style={styles.userInputLabel}>
              Please pick a username:
            </Text>
            <TextInput
              value={this.state.unsavedUserId}
              placeholder="E.g. ID number, username, or name"
              onChangeText={text => this.setState({ unsavedUserId: text })}
              style={styles.userInput}
            />
            <View style={styles.userModalActions}>
              <Button
                raised
                backgroundColor="lightgray"
                onPress={() => this.setState({ userModalVisible: false })}
                title="Cancel"
              />
              <Button
                raised
                backgroundColor="cornflowerblue"
                onPress={() => this.saveUser()} title="Save" >
                </Button>


            </View>
          </View>
          </Modal>

        <Modal
          visible={this.state.userModalVisible}
          animationType={"slide"}
          transparent={false}
        >
          <View style={[styles.container, styles.userModal]}>
            <Text style={styles.sectionHeader}>Your User ID</Text>
            <Text style={styles.userInputLabel}>
              Please pick a username:
            </Text>
            <TextInput
              value={this.state.unsavedUserId}
              placeholder="E.g. username, or name"
              onChangeText={text => this.setState({ unsavedUserId: text })}
              style={styles.userInput}
            />
            <View style={styles.userModalActions}>
              <Button
                raised
                backgroundColor="lightgray"
                onPress={() => this.setState({ userModalVisible: false })}
                title="Cancel"
              />
              <Button
                raised
                backgroundColor="cornflowerblue"
                onPress={() => this.saveUser()} title="Save" />


            </View>
          </View>
        </Modal>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    //  justifyContent: "center",
    //    alignItems: "center",
    backgroundColor: '#F4F8F9'
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
    fontSize: 16
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 38,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
