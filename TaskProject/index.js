/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import {store} from './redux/store/store'
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => App);
