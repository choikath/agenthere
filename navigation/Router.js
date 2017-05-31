import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import AppreciationScreen from '../screens/AppreciationScreen';
import IdeasScreen from '../screens/IdeasScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  appreciation: () => AppreciationScreen,
  newideas: () => IdeasScreen,
  rootNavigation: () => RootNavigation,
}));
