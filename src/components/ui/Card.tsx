import { ReactNode } from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { theme } from '../../design-system';

export type CardVariant =
  | 'default'
  | 'interactive'
  | 'highlighted'
  | 'warning'
  | 'danger'
  | 'success';

type CardProps = {
  children: ReactNode;
  variant?: CardVariant;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function Card({
  children,
  variant = 'default',
  onPress,
  style,
}: CardProps) {
  const cardStyle = [
    styles.base,
    styles[variant],
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          cardStyle,
          pressed && styles.pressed,
        ]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.large,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },

  default: {},

  interactive: {
    backgroundColor: theme.colors.surfaceSecondary,
  },

  highlighted: {
    borderColor: theme.colors.primary,
  },

  warning: {
    borderColor: theme.colors.warning,
  },

  danger: {
    borderColor: theme.colors.danger,
  },

  success: {
    borderColor: theme.colors.success,
  },

  pressed: {
    opacity: 0.84,
  },
});