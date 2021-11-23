import { useState } from 'react';
type UseFormFieldType = (
  errorMessage: string
) => [
  value: string,
  onChange: (v: string) => void,
  errorMessage: string | undefined
];
export const useFormField: UseFormFieldType = (errorMessage) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | undefined>(errorMessage);
  const onChange = (v: string) => {
    if (v.trim().length > 0) {
      setError(undefined);
    } else {
      setError(errorMessage);
    }
    return setValue(v);
  };
  return [value, onChange, error];
};
