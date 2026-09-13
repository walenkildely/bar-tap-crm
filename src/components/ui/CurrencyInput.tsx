import { Input, type InputProps } from './Input';

type CurrencyInputProps = Omit<
  InputProps,
  'keyboardType' | 'inputMode'
>;

export function CurrencyInput(
  props: CurrencyInputProps,
) {
  return (
    <Input
      {...props}
      keyboardType="decimal-pad"
      inputMode="decimal"
    />
  );
}