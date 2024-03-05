import React from 'react';
import './RadioButton.css';

interface CustomRadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isChecked: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const RadioButton: React.FC<CustomRadioButtonProps> = ({ label, isChecked, handleChange, ...props }) => {
    return (
        <label className="flex gap-[.5rem] items-center group-hover:text-gray-300  cursor-pointer">
            <input type="radio"  checked={isChecked} onChange={handleChange} {...props} />
            {label}
        </label>
    );
};

export default RadioButton;
