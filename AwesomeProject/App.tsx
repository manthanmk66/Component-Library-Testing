import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MButton} from 'mtp-shared';

const App = () => {
  return (
    <View style={styles.container}>
      <MButton
        title="Primary Button"
        onPress={() => console.log('Primary Pressed')}
        variant="primary"
      />
      <MButton
        title="Secondary Button"
        onPress={() => console.log('Secondary Pressed')}
        variant="secondary"
        style={styles.buttonSpacing}
      />
      <MButton
        title="Disabled Button"
        onPress={() => console.log('Disabled')}
        variant="danger"
        disabled
        style={styles.buttonSpacing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSpacing: {
    marginTop: 10,
  },
});

export default App;
