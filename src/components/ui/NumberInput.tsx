import { Input, type InputProps } from './Input';

type NumberInputProps = Omit<InputProps, 'keyboardType'>;

export function NumberInput(props: NumberInputProps) {
  return (
    <Input
      {...props}
      keyboardType="numeric"
      inputMode="numeric"
    />
  );
}