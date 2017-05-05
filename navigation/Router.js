import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  attendance: () => AttendanceScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
