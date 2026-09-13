import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import { theme } from '../../design-system';
import { AppText } from './AppText';

export type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export function Input({
  label,
  error,
  editable = true,
  style,
  onFocus,
  onBlur,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      {label ? (
        <AppText
          variant="label"
          style={styles.label}
        >
          {label}
        </AppText>
      ) : null}

      <TextInput
        {...rest}
        editable={editable}
        placeholderTextColor={theme.colors.textDisabled}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        style={[
          styles.input,
          isFocused && styles.focused,
          error && styles.error,
          !editable && styles.disabled,
          style,
        ]}
      />

      {error ? (
        <AppText
          variant="label"
          style={styles.errorText}
        >
          {error}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: theme.spacing.xs,
  },

  label: {
    color: theme.colors.textSecondary,
  },

  input: {
    minHeight: theme.sizes.inputHeight,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.medium,
    borderWidth: 1,
    borderColor: theme.colors.divider,
    backgroundColor: theme.colors.surface,
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSize.body,
  },

  focused: {
    borderColor: theme.colors.primary,
  },

  error: {
    borderColor: theme.colors.danger,
  },

  disabled: {
    opacity: 0.45,
  },

  errorText: {
    color: theme.colors.danger,
  },
});