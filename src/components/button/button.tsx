import React from 'react';
import { IAction } from '../../actions/todo-actions'

interface IButtonProps {
    label: string,
    name: string,
    className: string,
    filterBy(): IAction
}

const Button: React.FC<IButtonProps> = ({label, name, className, filterBy}) => {
    return (
        <button
            name={name}
            className={className}
            onClick={filterBy}>
            {label}
        </button>
    )
}

export default Button;