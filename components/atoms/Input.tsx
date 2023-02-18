import { PropsWithChildren } from 'react';

export interface InputProps {
    placeholder: string;
}

const Input = (props: InputProps) => {
    return <input {...props} />;
};

export default Input;
