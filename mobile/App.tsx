import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import './src/services/notificationConfigs';

export default function App() {

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  });

  useEffect(() => {
    getNotificationListener.current = Notifications
      .addNotificationReceivedListener(notification => {
        console.log(notification);
      });

    responseNotificationListener.current = Notifications
      .addNotificationResponseReceivedListener(response => {
        console.log(response);
      });

    return () => {
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background >
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}

    </Background>
  );
}
