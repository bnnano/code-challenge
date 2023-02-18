import { PropsWithChildren } from "react";

export interface TypographyProps extends PropsWithChildren {
    variant?: "header" | "placeholder" | "link" | "body" | "title";
}

const Typography = (props: TypographyProps) => {
    const { children, variant = "body", ...style } = props;
    return <p>{children}</p>;
};

export default Typography;
