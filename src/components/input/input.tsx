import React from 'react';

interface IInputProps {
    type: string
    placeholder: string,
    className: string,
    value: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const Input: React.FC<IInputProps> = ({placeholder, className, value, onChange}) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;