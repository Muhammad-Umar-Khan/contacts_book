// typography.js

import {StyleSheet} from 'react-native';
import fonts from './fonts';
import {colors} from './theme';

const typography = StyleSheet.create({
  h1: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 39.09,
    marginBottom: 16,
  },
  h2: {
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 28,
  },
  h3: {
    fontFamily: 'Poppins-Regular',
    color: colors.text_primary,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 26,
  },
  h4: {
    color: colors.text_primary,

    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 12,
  },
  h5: {
    color: colors.text_primary,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    marginBottom: 12,
  },
  h6: {
    color: colors.text_primary,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    marginBottom: 8,
  },
  body: {
    color: colors.text_primary,
    fontFamily: fonts.primary_font,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default typography;
