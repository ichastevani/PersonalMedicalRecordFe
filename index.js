/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'node-libs-react-native/globals';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

AppRegistry.registerComponent(appName, () => App);
