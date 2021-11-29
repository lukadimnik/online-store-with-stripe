import { FC } from 'react';

interface ButtonProps {
    disabled?: boolean;
    className?: string;
    onClick: () => void;
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.onClick} className={props.className}>
            {props.children}
        </button>
    );
};

export default Button;