import { StyleSheet, View } from 'react-native';

import {
  AppHeader,
  AppText,
  Screen,
} from '../../components';
import { theme } from '../../design-system';

export default function TablesScreen() {
  return (
    <Screen>
      <AppHeader title="Mesas" />

      <View style={styles.content}>
        <AppText variant="title">
          Módulo de Mesas
        </AppText>

        <AppText variant="bodySecondary">
          Esta área será implementada na próxima etapa.
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