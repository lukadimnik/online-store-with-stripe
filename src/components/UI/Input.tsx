import { FC } from 'react';

interface InputProps {
    type?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
}

const Input: FC<InputProps> = (props) => {
    const { children, placeholder, type = 'text', className = '', required = false, ...rest } = props;

    return <label className='label'>
        {placeholder}
        {required && <span className='input-required'>*</span>}
        <div>
            <input type={type} placeholder={placeholder} className={`input ${className}`} required={required} {...rest} />
        </div>
    </label>;
};

export default Input;