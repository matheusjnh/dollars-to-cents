import { StyleSheet } from 'react-native';

const inputAreaFontSize = 30;

const theme = {
  textPrimary: '#252621',
  textSecondary: '#25262173',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 40,
    backgroundColor: '#E8E9C7',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  title: {
    paddingBottom: 30,
    color: theme.textPrimary,
    fontSize: 35,
    fontFamily: 'inter_bold',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: inputAreaFontSize,
  },

  dollarSymbol: {
    paddingRight: 10,
    color: theme.textSecondary,
    fontSize: inputAreaFontSize,
  },

  dollarInput: {
    flexShrink: 1,
    fontSize: inputAreaFontSize,
    borderBottomColor: theme.textSecondary,
    borderBottomWidth: 2,
  },

  inputError: {
    borderBottomColor: '#F52447',
  },

  centsResult: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  centsValue: {
    flexShrink: 1,
    fontSize: inputAreaFontSize * 1.5,
  },

  centsSymbol: {
    paddingLeft: 10,
    color: theme.textSecondary,
    fontSize: inputAreaFontSize * 1.5,
  },

  coinsDivision: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  coinsValue: {
    alignItems: 'flex-end',
  },

  coinsCount: {
    alignItems: 'flex-end',
  },

  coinsText: {
    fontSize: 18,
  },
});
