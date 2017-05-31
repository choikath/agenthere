import Expo from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert } from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';
import AppIntro from 'react-native-app-intro';

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
    skipIntro: true,
  };

  onSkipBtnHandle = (index) => {
    this.setState({ skipIntro: true });
    // console.log(index);
  }
  doneBtnHandle = () => {
    this.setState({ skipIntro: true });

  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    // console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    // console.log(index, total);
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        // images: [require('./assets/images/expo-wordmark.png')],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady && !this.state.skipIntro) {

      const pageArray = [{
        title: 'Free Lunch',
        description: 'You no longer have to sign into conference! This app knows when you are here',
        img: require('./assets/icons/images/burger.png'),
        imgStyle: {
          height: 40 * 2.5,
          width: 40 * 2.5,
        },
        backgroundColor: 'lightseagreen',
        fontColor: '#fff',
        level: 10,
      }, {
        title: 'Real Talk',
        description: 'What would help you do your work? Someone useful is listening!',
        img: require('./assets/icons/images/suggbox.png'),
        imgStyle: {
          height: 40 * 2.5,
          width: 40 * 2.5,
        },
        backgroundColor: 'cornflowerblue',
        fontColor: '#fff',
        level: 10,
      }, {
        title: 'Well Done',
        description: 'Share some appreciation with your hard-working team. It takes a village.',
        img: require('./assets/icons/images/welldone.png'),
        imgStyle: {
          height: 20 * 3.9,
          width: 30 * 3.5,
        },
        backgroundColor: 'mediumvioletred',
        fontColor: '#fff',
        level: 10,
      }, {
        title: 'Sunshine and Rainbows',
        description: 'Surprise pick-me-ups for when things get bleak',
        img: require('./assets/icons/images/sunny.png'),
        imgStyle: {
          height: 40 * 2.5,
          width: 40 * 2.5,
        },
        backgroundColor: '#FFC107',
        fontColor: '#fff',
        level: 10,
      }

    ];

      return (
        <View style={styles.container}>
          <AppIntro
            onNextBtnClick={this.nextBtnHandle}
            onDoneBtnClick={this.doneBtnHandle}
            onSkipBtnClick={this.onSkipBtnHandle}
            onSlideChange={this.onSlideChangeHandle}
            pageArray={pageArray}
          />


          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
        </View>
      );
    }
    if (this.state.appIsReady && this.state.skipIntro) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute={Router.getRoute('rootNavigation')}
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
        </View>
      );
    }
      else {
      return <Expo.AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Expo.registerRootComponent(AppContainer);
