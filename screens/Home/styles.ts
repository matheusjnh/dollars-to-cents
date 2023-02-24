import { StyleSheet } from 'react-native';

const inputAreaFontSize = 30;

const theme = {
  textPrimary: '#252621',
  textSecondary: '#25262173',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 40,
    backgroundColor: '#E8E9C7',
    alignItems: 'center',
  },

  title: {
    paddingBottom: 30,
    color: theme.textPrimary,
    fontSize: 35,
    fontFamily: 'inter_bold',
  },

  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: inputAreaFontSize,
  },

  dollarSymbol: {
    paddingRight: 10,
    color: theme.textSecondary,
    fontSize: inputAreaFontSize,
  },

  input: {
    fontSize: inputAreaFontSize,
    borderBottomColor: theme.textSecondary,
    borderBottomWidth: 2,
  },

  inputError: {
    borderBottomColor: '#F52447',
  },
});
