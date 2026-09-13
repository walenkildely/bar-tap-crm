import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { theme } from '../../design-system';
import { AppText } from './AppText';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'destructive';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
};

export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'secondary'
              ? theme.colors.textPrimary
              : theme.colors.background
          }
        />
      ) : (
        <AppText
          style={[
            styles.text,
            variant === 'secondary' && styles.secondaryText,
          ]}
        >
          {title}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: theme.sizes.buttonHeight,
    borderRadius: theme.radius.medium,
    paddingHorizontal: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primary: {
    backgroundColor: theme.colors.primary,
  },

  secondary: {
    backgroundColor: theme.colors.surfaceSecondary,
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },

  destructive: {
    backgroundColor: theme.colors.danger,
  },

  pressed: {
    opacity: 0.82,
  },

  disabled: {
    opacity: 0.45,
  },

  text: {
    color: theme.colors.background,
    fontWeight: theme.typography.fontWeight.semiBold,
  },

  secondaryText: {
    color: theme.colors.textPrimary,
  },
});