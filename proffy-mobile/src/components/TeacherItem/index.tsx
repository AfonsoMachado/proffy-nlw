import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View styles={styles.profile}>
        <Image 
          styles={styles.avatar}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/11397955?s=460&u=e11b0f50547f9a3b9be9e8b076b652f374ff46b8&v=4'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Afonso Machado</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;