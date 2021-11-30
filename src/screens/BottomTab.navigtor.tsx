import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home.screen';
import {NavList} from '../types/navigation.types';
import theme from '../theme';

import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const BottomTabs = createBottomTabNavigator<NavList>();
const BottomNavigator: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={theme.lightGray} />
      <BottomTabs.Navigator initialRouteName="Task">
        <BottomTabs.Screen name={'Task'} component={Home} />
      </BottomTabs.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: theme.lightGray, flex: 1},
});

export default BottomNavigator;
