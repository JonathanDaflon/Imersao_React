import React from 'react';
import styled from "styled-components";

interface InputProps {
  hasValue?: boolean;
}
const Input = styled.input<InputProps>`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;

interface FormFieldProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: "text" | "color";
  placeholder: string
}

export function Formulario({ label, name, onChange, type, value, placeholder }: FormFieldProps): JSX.Element {
  return (
    <label>
      <Input name={name} type={type} onChange={onChange} value={value} placeholder={placeholder} />
      <span>{label}:</span>
    </label>
  );
}