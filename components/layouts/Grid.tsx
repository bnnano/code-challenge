import { PropsWithChildren } from "react";

export interface GridProps extends PropsWithChildren {}

const Grid = (props: GridProps) => {
    const { children } = props;
    return <div>{children}</div>;
};

export default Grid;
