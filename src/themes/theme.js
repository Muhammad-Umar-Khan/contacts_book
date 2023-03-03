// themes.js

import {StyleSheet} from 'react-native';

const colors = {
  primary: '#5398FF',
  secondary: '#FF8F8F',
  tertiary: '#F4B400',
  background: '#FFFFFF',
  text_primary: '#000000',
  text_secondary: '#FFFFFF',
  mutedText: '#A7A7A7',
  logo_color: '#5398FF',
};

const theme = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  secondary: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  tertiary: {
    backgroundColor: colors.tertiary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  disabled: {
    backgroundColor: colors.mutedText,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  text: {
    color: colors.text_primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  border: {
    padding: 10,
    borderWidth: 2,
    borderColor: colors.text_primary,
    borderRadius: 15,
  },
});

export {colors, theme};
