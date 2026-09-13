import {
  SymbolView,
  type SymbolViewProps,
} from 'expo-symbols';
import {
  Pressable,
  StyleSheet,
} from 'react-native';

import { theme } from '../../design-system';

type IconButtonVariant =
  | 'default'
  | 'surface'
  | 'primary'
  | 'danger';

type IconButtonProps = {
  icon: SymbolViewProps['name'];
  onPress: () => void;
  accessibilityLabel: string;
  variant?: IconButtonVariant;
  size?: number;
  disabled?: boolean;
};

export function IconButton({
  icon,
  onPress,
  accessibilityLabel,
  variant = 'default',
  size = theme.sizes.iconMedium,
  disabled = false,
}: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <SymbolView
        name={icon}
        size={size}
        tintColor={
          variant === 'primary'
            ? theme.colors.background
            : theme.colors.textPrimary
        }
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: theme.sizes.touchTarget,
    height: theme.sizes.touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.medium,
  },

  default: {
    backgroundColor: theme.colors.transparent,
  },

  surface: {
    backgroundColor: theme.colors.surfaceSecondary,
  },

  primary: {
    backgroundColor: theme.colors.primary,
  },

  danger: {
    backgroundColor: theme.colors.danger,
  },

  pressed: {
    opacity: 0.75,
  },

  disabled: {
    opacity: 0.4,
  },
});