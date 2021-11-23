import React, { FC } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { ArtistDetailView } from './src/screens/artistDetails';
import { HomeView } from './src/screens/home';
import { LoginView } from './src/screens/login';
const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' component={LoginView} hideNavBar />
    <Scene key='home' component={HomeView} />
    <Scene
      key='artistDetail'
      component={ArtistDetailView}
      title='Detalles'
      back={true}
    />
  </Scene>
);
const App: FC = () => {
  return <Router scenes={scenes} />;
};
export default App;
