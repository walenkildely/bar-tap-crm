import { StyleSheet, View } from 'react-native';

import {
  AppHeader,
  AppText,
  Card,
  CurrencyValue,
  Screen,
  StatusBadge,
} from '../../components';
import { theme } from '../../design-system';

export default function HomeScreen() {
  return (
    <Screen scroll>
      <AppHeader
        title="Espetaria"
        subtitle="Operação do dia"
        showMenuButton
        onMenuPress={() => {}}
        rightAction={{
          icon: {
            ios: 'bell',
            android: 'notifications',
            web: 'notifications',
          },
          accessibilityLabel: 'Notificações',
          onPress: () => {},
        }}
      />

      <View style={styles.section}>
        <AppText variant="title">
          Visão geral
        </AppText>

        <AppText variant="bodySecondary">
          Acompanhe os principais pontos da operação.
        </AppText>
      </View>

      <View style={styles.cardsGrid}>
        <Card style={styles.summaryCard}>
          <AppText variant="label">
            Mesas abertas
          </AppText>

          <AppText
            variant="display"
            style={styles.metricValue}
          >
            0
          </AppText>

          <StatusBadge status="available" />
        </Card>

        <Card style={styles.summaryCard}>
          <AppText variant="label">
            Pedidos ativos
          </AppText>

          <AppText
            variant="display"
            style={styles.metricValue}
          >
            0
          </AppText>

          <StatusBadge status="pending" />
        </Card>
      </View>

      <Card style={styles.card}>
        <AppText variant="label">
          Vendas do dia
        </AppText>

        <CurrencyValue
          value={0}
          emphasized
          style={styles.currencyValue}
        />

        <AppText
          variant="bodySecondary"
          style={styles.description}
        >
          O valor será atualizado quando o módulo de Caixa estiver ativo.
        </AppText>
      </Card>

      <Card
        variant="highlighted"
        style={styles.card}
      >
        <AppText variant="subtitle">
          Operação pronta
        </AppText>

        <AppText
          variant="bodySecondary"
          style={styles.description}
        >
          A fundação do aplicativo está funcionando e preparada para receber os próximos módulos.
        </AppText>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.xxs,
  },

  cardsGrid: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },

  summaryCard: {
    flex: 1,
    minWidth: 0,
  },

  metricValue: {
    marginVertical: theme.spacing.sm,
  },

  card: {
    marginBottom: theme.spacing.md,
  },

  currencyValue: {
    marginTop: theme.spacing.xs,
  },

  description: {
    marginTop: theme.spacing.xs,
  },
});