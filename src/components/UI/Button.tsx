import { FC } from 'react';

interface ButtonProps {
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    outline?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const {children, className, outline, ...rest} = props;

    const btnClass = outline ? 'btn-outline' : 'btn-default';
    const extraBtnClass = className ? ` ${className}` : '';

    return (
        <button className={`btn ${btnClass}${extraBtnClass}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;