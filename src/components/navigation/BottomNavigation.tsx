import type { SymbolViewProps } from 'expo-symbols';
import { SymbolView } from 'expo-symbols';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { theme } from '../../design-system';
import { AppText } from '../ui/AppText';
import { AddProductButton } from './AddProductButton';

export type BottomNavigationItem =
  | 'home'
  | 'tables'
  | 'orders'
  | 'cash';

type BottomNavigationProps = {
  activeItem?: BottomNavigationItem;
  onHomePress?: () => void;
  onTablesPress?: () => void;
  onAddProductPress?: () => void;
  onOrdersPress?: () => void;
  onCashPress?: () => void;
};

type NavigationItemProps = {
  label: string;
  icon: SymbolViewProps['name'];
  active?: boolean;
  onPress: () => void;
};

function NavigationItem({
  label,
  icon,
  active = false,
  onPress,
}: NavigationItemProps) {
  const color = active
    ? theme.colors.primary
    : theme.colors.textSecondary;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.item,
        pressed && styles.pressed,
      ]}
    >
      <SymbolView
        name={icon}
        size={theme.sizes.iconMedium}
        tintColor={color}
      />

      <AppText
        variant="label"
        style={{ color }}
      >
        {label}
      </AppText>
    </Pressable>
  );
}

export function BottomNavigation({
  activeItem = 'home',
  onHomePress,
  onTablesPress,
  onAddProductPress,
  onOrdersPress,
  onCashPress,
}: BottomNavigationProps) {
  return (
    <View style={styles.container}>
      <NavigationItem
        label="Início"
        active={activeItem === 'home'}
        onPress={onHomePress ?? (() => {})}
        icon={{
          ios: 'house.fill',
          android: 'home',
          web: 'home',
        }}
      />

      <NavigationItem
        label="Mesas"
        active={activeItem === 'tables'}
        onPress={onTablesPress ?? (() => {})}
        icon={{
          ios: 'square.grid.2x2.fill',
          android: 'grid_view',
          web: 'grid_view',
        }}
      />

      <AddProductButton
        onPress={onAddProductPress ?? (() => {})}
      />

      <NavigationItem
        label="Pedidos"
        active={activeItem === 'orders'}
        onPress={onOrdersPress ?? (() => {})}
        icon={{
          ios: 'list.clipboard.fill',
          android: 'receipt_long',
          web: 'receipt_long',
        }}
      />

      <NavigationItem
        label="Caixa"
        active={activeItem === 'cash'}
        onPress={onCashPress ?? (() => {})}
        icon={{
          ios: 'wallet.bifold.fill',
          android: 'account_balance_wallet',
          web: 'account_balance_wallet',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: theme.sizes.bottomNavigationHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xs,
    borderTopWidth: 1,
    borderTopColor: theme.colors.divider,
    backgroundColor: theme.colors.surface,
  },

  item: {
    flex: 1,
    minHeight: theme.sizes.touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xxs,
  },

  pressed: {
    opacity: 0.7,
  },
});