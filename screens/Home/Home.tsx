import { useState } from 'react';
import { Text, View, StatusBar, TextInput } from 'react-native';
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { ConvertDollarToCents } from '../../src/ConvertDollarToCents';
import { ConvertCentsToCoins } from '../../src/ConvertCentsToCoins/ConvertCentsToCoins';

import { styles } from './styles';

export function Home() {
  const [centsValue, setCentsValue] = useState(0);
  const [error, setError] = useState(false);

  const [fontsLoaded] = useFonts({
    inter_bold: Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  const handleOnTextChange = (text: string) => {
    const dollarsInNumber = Number(text);

    if (Number.isNaN(dollarsInNumber)) {
      setError(true);
    } else {
      setCentsValue(ConvertDollarToCents(dollarsInNumber));
      setError(false);
    }
  };

  const coins = ConvertCentsToCoins(centsValue);
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
