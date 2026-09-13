import { StyleSheet, View } from 'react-native';

import { theme } from '../../design-system';
import { AppText } from './AppText';

export type StatusBadgeStatus =
  | 'pending'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'awaitingPayment'
  | 'late'
  | 'available'
  | 'occupied';

type StatusBadgeProps = {
  status: StatusBadgeStatus;
};

const statusConfig: Record<
  StatusBadgeStatus,
  {
    label: string;
    color: string;
    backgroundColor: string;
  }
> = {
  pending: {
    label: 'Pendente',
    color: theme.colors.warning,
    backgroundColor: theme.colors.surfaceSecondary,
  },

  preparing: {
    label: 'Preparando',
    color: theme.colors.primary,
    backgroundColor: theme.colors.surfaceSecondary,
  },

  ready: {
    label: 'Pronto',
    color: theme.colors.success,
    backgroundColor: theme.colors.surfaceSecondary,
  },

  delivered: {
    label: 'Entregue',
    color: theme.colors.info,
    backgroundColor: theme.colors.surfaceSecondary,
  },

  awaitingPayment: {
    label: 'Pagamento',
    color: theme.colors.warning,
    backgroundColor: theme.colors.surfaceSecondary,
  },

  late: {
    label: 'Atrasado',
    color: theme.colors.danger,
    backgroundColor: theme.colors.surfaceSecondary,
  },

  available: {
    label: 'Livre',
    color: theme.colors.success,
    backgroundColor: theme.colors.surfaceSecondary,
  },

  occupied: {
    label: 'Ocupada',
    color: theme.colors.primary,
    backgroundColor: theme.colors.surfaceSecondary,
  },
};

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: config.backgroundColor,
          borderColor: config.color,
        },
      ]}
    >
      <View
        style={[
          styles.indicator,
          {
            backgroundColor: config.color,
          },
        ]}
      />

      <AppText
        variant="label"
        style={[
          styles.label,
          {
            color: config.color,
          },
        ]}
      >
        {config.label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.radius.round,
    borderWidth: 1,
  },

  indicator: {
    width: 8,
    height: 8,
    borderRadius: theme.radius.round,
  },

  label: {
    fontWeight: theme.typography.fontWeight.semiBold,
  },
});