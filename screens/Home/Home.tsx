import { Text, View, StatusBar } from 'react-native';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { styles } from './styles';

export function Home() {
  const [fontsLoaded] = useFonts({
    inter_bold: Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dollars to Cents</Text>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}
