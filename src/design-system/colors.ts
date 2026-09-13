export const colors = {
  background: '#111315',

  surface: '#1A1D1F',
  surfaceSecondary: '#222629',

  primary: '#F28C28',

  success: '#22C55E',
  warning: '#FBBF24',
  danger: '#EF4444',
  info: '#3B82F6',

  textPrimary: '#F5F5F5',
  textSecondary: '#A1A1AA',
  textDisabled: '#71717A',

  divider: '#2C3034',

  transparent: 'transparent',
} as const;

export type ColorToken = keyof typeof colors;