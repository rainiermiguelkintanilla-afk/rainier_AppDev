import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';

import AuthNav from './AuthNav';
import MainNav from './MainNav';
import { useDispatch, useSelector } from 'react-redux';
import { resetLogin } from '../app/reducers/auth';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.auth);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#ffffff', true);
    }

    StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);

  // Ensure we always start on the auth flow so Login/Register are visible
  useEffect(() => {
    dispatch(resetLogin());
  }, [dispatch]);

  let isLoggedIn = !!data;

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};
