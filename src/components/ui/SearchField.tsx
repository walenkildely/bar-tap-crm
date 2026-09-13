import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { SymbolView } from 'expo-symbols';

import { theme } from '../../design-system';

type SearchFieldProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
};

export function SearchField({
  value,
  onChangeText,
  placeholder = 'Pesquisar...',
}: SearchFieldProps) {
  const [internalValue, setInternalValue] = useState('');

  const currentValue = value ?? internalValue;

  function handleChange(text: string) {
    if (value === undefined) {
      setInternalValue(text);
    }

    onChangeText?.(text);
  }

  function handleClear() {
    if (value === undefined) {
      setInternalValue('');
    }

    onChangeText?.('');
  }

  return (
    <View style={styles.container}>
      <SymbolView
        name={{
            ios: 'magnifyingglass',
            android: 'search',
            web: 'search',
        }}
        size={theme.sizes.iconMedium}
        tintColor={theme.colors.textSecondary}
      />

      <TextInput
        value={currentValue}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textDisabled}
        style={styles.input}
        accessibilityLabel={placeholder}
      />

      {currentValue.length > 0 && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Limpar pesquisa"
          onPress={handleClear}
          hitSlop={8}
          style={({ pressed }) => [
            styles.clearButton,
            pressed && styles.pressed,
          ]}
        >
          <SymbolView
            name={{
            ios: 'xmark.circle.fill',
            android: 'cancel',
            web: 'cancel',
        }}
        size={theme.sizes.iconMedium}
        tintColor={theme.colors.textSecondary}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: theme.sizes.inputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.divider,
    borderRadius: theme.radius.medium,
  },

  input: {
    flex: 1,
    minHeight: theme.sizes.inputHeight,
    paddingVertical: 0,
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSize.body,
  },

  clearButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pressed: {
    opacity: 0.65,
  },
});