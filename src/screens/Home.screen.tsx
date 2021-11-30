import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import theme from '../theme';
import {NavList} from '../types/navigation.types';

type HomeProps = NativeStackScreenProps<NavList, 'Task'>;

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: theme.lightGray, flex: 1},
  sectionContainer: {
    paddingHorizontal: 20,
  },
  taskList: {
    flex: 1,
    paddingTop: 10,
  },
});

export default Home;
