import React from 'react';
import { ScrollView, StyleSheet, Button, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { ExpoConfigView } from '@expo/samples';
import firebase from 'firebase';
import moment from 'moment';

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'All Conferences',
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

  render() {
    var list = require('../components/confdata.json');

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        {/* Go ahead and delete ExpoConfigView and replace it with your
           * content, we just wanted to give you a quick view of your config */}
           <View style={styles.welcomeContainer}>
           <Text style={styles.sectionHeader}>My conferences</Text>

          <List containerStyle={{flex:1, marginBottom: 20}}>
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
          </List>

        <Text style={styles.sectionHeader}>Other conferences</Text>


        </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
