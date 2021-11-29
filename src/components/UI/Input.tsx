import { FC } from 'react';

interface InputProps {
    type?: string;
    value?: string;
    placeholder?: string;
}

const Input: FC<InputProps> = ({ type = 'text', placeholder = '' }) => {
    return (
        <label className='label'>
            {placeholder}
            <div>
                <input type={type} placeholder={placeholder} className='input' />
            </div>
        </label>
    );
};

export default Input;