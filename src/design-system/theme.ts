import { colors } from './colors';
import { radius } from './radius';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme = {
  colors,
  spacing,
  radius,
  typography,
  sizes,
  shadows,
} as const;

export type AppTheme = typeof theme;