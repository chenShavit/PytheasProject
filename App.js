import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

import FirstStep from './src/screens/FirstStep/firstStep';

// Register screens

Navigation.registerComponent('pytheas.AuthScreen', ()=> AuthScreen);

Navigation.registerComponent('pytheas.FirstStep', ()=> FirstStep);


// Start a App
function start() {
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      children: [{
        component: {
          name: 'pytheas.AuthScreen',
        }
      }],
            }
  });
});
Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'pytheas.AuthScreen',
            }
          }],
          options: {
            bottomTab: {
              text: 'Tab 1',
            }
          }
        }
      },
      {
      }]
    }
  }

});
}
module.exports = {
  start
};