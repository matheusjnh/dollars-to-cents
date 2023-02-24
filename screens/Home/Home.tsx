import { Text, View, StatusBar, TextInput } from 'react-native';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { styles } from './styles';
import { useState } from 'react';

export function Home() {
  const [dollarValue, setDollarValue] = useState(0);
  const [error, setError] = useState(false);

  const [fontsLoaded] = useFonts({
    inter_bold: Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  const handleOnTextChange = (text: string) => {
    const valueInNumber = Number(text);

    if (Number.isNaN(valueInNumber)) {
      setError(true);
    } else {
      setDollarValue(valueInNumber);
      setError(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dollars to Cents</Text>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.inputArea}>
        <Text style={styles.dollarSymbol}>$</Text>

        <TextInput
          style={[styles.input, error && styles.inputError]}
          onChangeText={handleOnTextChange}
          keyboardType="decimal-pad"
        ></TextInput>
      </View>
    </View>
  );
}
