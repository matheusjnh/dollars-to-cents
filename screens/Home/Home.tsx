import { useState } from 'react';
import { Text, View, StatusBar, TextInput } from 'react-native';
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { ConvertDollarToCents } from '../../src/ConvertDollarToCents';
import { ConvertCentsToCoins } from '../../src/ConvertCentsToCoins/ConvertCentsToCoins';

import { styles } from './styles';

export function Home() {
  const [centsValue, setCentsValue] = useState(0);
  const [error, setError] = useState(false);

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

  const [fontsLoaded] = useFonts({
    inter_bold: Inter_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.header}>
        <Text style={styles.title}>Dollars to Cents</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.dollarSymbol}>$</Text>

          <TextInput
            style={[styles.dollarInput, error && styles.inputError]}
            onChangeText={handleOnTextChange}
            keyboardType="decimal-pad"
          />
        </View>
      </View>

      <View style={styles.centsResult}>
        <Text style={styles.centsValue}>{centsValue}</Text>

        <Text style={styles.centsSymbol}>¢</Text>
      </View>

      <View style={styles.coinsDivision}>
        <View style={styles.coinsValue}>
          {coins.map((coin, index) => (
            <Text style={styles.coinsText} key={index}>
              {coin.value} ¢
            </Text>
          ))}
        </View>

        <View>
          {coins.map((coin, index) => (
            <Text style={styles.coinsText} key={index}>
              {coin.name}
            </Text>
          ))}
        </View>

        <View style={styles.coinsCount}>
          {coins.map((coin, index) => (
            <Text style={styles.coinsText} key={index}>
              {coin.count}x
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}
