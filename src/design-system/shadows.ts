import { Platform, ViewStyle } from 'react-native';

export const shadows: Record<string, ViewStyle> = {
  none: {},

  subtle: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.12,
      shadowRadius: 4,
    },

    android: {
      elevation: 2,
    },

    default: {},
  }),
};