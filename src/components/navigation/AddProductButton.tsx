import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, View } from 'react-native';

import { theme } from '../../design-system';
import { AppText } from '../ui/AppText';

type AddProductButtonProps = {
  onPress: () => void;
};

export function AddProductButton({
  onPress,
}: AddProductButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Adicionar produto"
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.button}>
        <SymbolView
          name={{
            ios: 'plus',
            android: 'add',
            web: 'add',
          }}
          size={theme.sizes.iconLarge}
          tintColor={theme.colors.background}
        />
      </View>

      <AppText
        variant="label"
        style={styles.label}
      >
        Produto
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 64,
  },

  button: {
    width: 54,
    height: 54,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },

  label: {
    marginTop: theme.spacing.xxs,
    color: theme.colors.textPrimary,
  },

  pressed: {
    opacity: 0.8,
  },
});