import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {PropsWithoutRef} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import EllipseIcon from '../icons/ellipse.icon';
import ForwardIcon from '../icons/forward.icon';
import theme from '../theme';
import {NavList} from '../types/navigation.types';

export interface HeadlinePropTypes {
  navigation: NativeStackNavigationProp<NavList, 'Task'>;
}

const HeadlineTask: React.FC<PropsWithoutRef<HeadlinePropTypes>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.time}>00:32:10</Text>
        <Pressable onPress={() => navigation.navigate('Test')}>
          <ForwardIcon />
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <EllipseIcon />
        <Text style={styles.bottomText}>Rasion Project</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: theme.primary,
    color: 'white',
    borderRadius: 10,
    height: 114,
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  top: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    color: theme.white,
    textAlign: 'right',
    fontSize: 32,
    fontFamily: 'Rubik-Bold',
    fontWeight: '500',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    color: theme.white,
    paddingLeft: 7,
    fontSize: 16,
    fontFamily: theme.RubikMeduim,
  },
});
export default HeadlineTask;