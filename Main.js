import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};