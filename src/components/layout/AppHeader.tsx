import { StyleSheet, View } from 'react-native';
import type { SymbolViewProps } from 'expo-symbols';

import { theme } from '../../design-system';
import { AppText } from '../ui/AppText';
import { IconButton } from '../ui/IconButton';

type HeaderAction = {
  icon: SymbolViewProps['name'];
  accessibilityLabel: string;
  onPress: () => void;
};

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  onBackPress?: () => void;
  onMenuPress?: () => void;
  rightAction?: HeaderAction;
};

export function AppHeader({
  title,
  subtitle,
  showBackButton = false,
  showMenuButton = false,
  onBackPress,
  onMenuPress,
  rightAction,
}: AppHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {showBackButton ? (
          <IconButton
            icon={{
              ios: 'chevron.left',
              android: 'arrow_back',
              web: 'arrow_back',
            }}
            accessibilityLabel="Voltar"
            onPress={onBackPress ?? (() => {})}
          />
        ) : null}

        {showMenuButton ? (
          <IconButton
            icon={{
              ios: 'line.3.horizontal',
              android: 'menu',
              web: 'menu',
            }}
            accessibilityLabel="Abrir menu"
            onPress={onMenuPress ?? (() => {})}
          />
        ) : null}

        <View style={styles.textContainer}>
          <AppText
            variant="title"
            numberOfLines={1}
          >
            {title}
          </AppText>

          {subtitle ? (
            <AppText
              variant="bodySecondary"
              numberOfLines={1}
            >
              {subtitle}
            </AppText>
          ) : null}
        </View>
      </View>

      {rightAction ? (
        <IconButton
          icon={rightAction.icon}
          accessibilityLabel={rightAction.accessibilityLabel}
          onPress={rightAction.onPress}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
  },

  left: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },

  textContainer: {
    flex: 1,
    minWidth: 0,
  },
});