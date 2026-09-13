import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';

import { theme } from '../../design-system';

export type AppTextVariant =
  | 'display'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'bodySecondary'
  | 'label';

type AppTextProps = {
  children: ReactNode;
  variant?: AppTextVariant;
  color?: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
};

export function AppText({
  children,
  variant = 'body',
  color,
  style,
  numberOfLines,
}: AppTextProps) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.base,
        styles[variant],
        color ? { color } : undefined,
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: theme.colors.textPrimary,
  },

  display: {
    fontSize: theme.typography.fontSize.display,
    lineHeight: theme.typography.lineHeight.display,
    fontWeight: theme.typography.fontWeight.bold,
  },

  title: {
    fontSize: theme.typography.fontSize.title,
    lineHeight: theme.typography.lineHeight.title,
    fontWeight: theme.typography.fontWeight.semiBold,
  },

  subtitle: {
    fontSize: theme.typography.fontSize.subtitle,
    lineHeight: theme.typography.lineHeight.subtitle,
    fontWeight: theme.typography.fontWeight.semiBold,
  },

  body: {
    fontSize: theme.typography.fontSize.body,
    lineHeight: theme.typography.lineHeight.body,
    fontWeight: theme.typography.fontWeight.regular,
  },

  bodySecondary: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.bodySecondary,
    lineHeight: theme.typography.lineHeight.bodySecondary,
    fontWeight: theme.typography.fontWeight.regular,
  },

  label: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.label,
    lineHeight: theme.typography.lineHeight.label,
    fontWeight: theme.typography.fontWeight.medium,
  },
});