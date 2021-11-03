import React, {PropsWithoutRef} from 'react';
import {Pressable, StyleSheet, View, Text, FlatList} from 'react-native';
import DesignIcon from '../icons/design.icon';
import PlayIcon from '../icons/play.icon';
import theme from '../theme';
import {TaskType} from '../types/components.types';

export interface TaskProps {
  task: TaskType;
  navigate: (taskid: number) => void;
}
const Task: React.FC<PropsWithoutRef<TaskProps>> = ({task, navigate}) => {
  return (
    <Pressable style={styles.container} onLongPress={() => navigate(task.id)}>
      <View>
        <DesignIcon />
      </View>
      <View style={styles.left}>
        <View style={styles.leftTopBotom}>
          <Text style={styles.taskName}>{task.name}</Text>
          <Text style={styles.time}>{task.time}</Text>
        </View>
        <View style={[styles.leftTopBotom, styles.leftBottom]}>
          <FlatList
            data={task.tags}
            horizontal={true}
            renderItem={({item}) => (
              <View>
                <Text style={styles.tag}>{item}</Text>
              </View>
            )}
          />
          <PlayIcon />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 84,
    flex: 1,
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    backgroundColor: theme.white,
  },
  left: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'space-around',
  },
  leftTopBotom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  leftBottom: {
    paddingTop: 20,
  },
  taskName: {
    color: theme.primary,
    fontSize: 14,
    fontFamily: theme.RubikSemiBold,
  },
  time: {
    color: theme.primary,
    fontSize: 13,
    fontFamily: theme.Rubik,
  },
  tags: {
    flex: 1,
  },
  tag: {
    marginRight: 4,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
    color: theme.purple,
    backgroundColor: '#F5EEFC',
  },
});
export default Task;
