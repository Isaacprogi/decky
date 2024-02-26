import React from 'react';
import styles from './Input.module.css'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  customClass?: string;
}

const Input: React.FC<CustomInputProps> = ({ label, customClass, ...props }) => {
  return (
    <div className={`${styles.inputWrapper} ${customClass || ''}`}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Input;
