import { StyleProp, TextStyle } from 'react-native';

import { formatCurrency } from '../../utils';
import { AppText } from './AppText';

type CurrencyValueProps = {
  value: number;
  emphasized?: boolean;
  style?: StyleProp<TextStyle>;
};

export function CurrencyValue({
  value,
  emphasized = false,
  style,
}: CurrencyValueProps) {
  return (
    <AppText
      variant={emphasized ? 'display' : 'subtitle'}
      style={style}
    >
      {formatCurrency(value)}
    </AppText>
  );
}