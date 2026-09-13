import { Slot, usePathname, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import {
  BottomNavigation,
  type BottomNavigationItem,
} from '../../components';
import { theme } from '../../design-system';

export default function TabsLayout() {
  const router = useRouter();
  const pathname = usePathname();

  function getActiveItem(): BottomNavigationItem {
    if (pathname.startsWith('/mesas')) {
      return 'tables';
    }

    if (pathname.startsWith('/pedidos')) {
      return 'orders';
    }

    if (pathname.startsWith('/caixa')) {
      return 'cash';
    }

    return 'home';
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>

      <BottomNavigation
        activeItem={getActiveItem()}
        onHomePress={() => router.replace('/')}
        onTablesPress={() => router.replace('/mesas')}
        onAddProductPress={() => {}}
        onOrdersPress={() => router.replace('/pedidos')}
        onCashPress={() => router.replace('/caixa')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    flex: 1,
  },
});