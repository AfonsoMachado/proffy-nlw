// InputHTMLAttributes são todos os atributos que o input pode recber
import React, { InputHTMLAttributes } from 'react';

import './styles.css'

// Propriedades do componente
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// Componente funcional em react
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;