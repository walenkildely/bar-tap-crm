import { StyleSheet, View } from 'react-native';

import {
  AppHeader,
  AppText,
  Screen,
} from '../../components';
import { theme } from '../../design-system';

export default function OrdersScreen() {
  return (
    <Screen>
      <AppHeader title="Pedidos" />

      <View style={styles.content}>
        <AppText variant="title">
          Módulo de Pedidos
        </AppText>

        <AppText variant="bodySecondary">
          Esta área será implementada em uma etapa futura.
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: theme.spacing.xs,
  },
});