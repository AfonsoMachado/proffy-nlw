// InputHTMLAttributes são todos os atributos que o input pode recber
import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

// Propriedades do componente
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

// Componente funcional em react
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default Textarea;