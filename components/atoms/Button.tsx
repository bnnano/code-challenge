import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {}

const Button = (props: ButtonProps) => {
    const { children } = props;
    return <button>{children}</button>;
};

export default Button;
