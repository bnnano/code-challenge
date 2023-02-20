import { PropsWithChildren } from 'react';

export interface StackProps extends PropsWithChildren {
    direction?: 'row' | 'column';
    alignItems?: 'start' | 'end' | 'center';
}

const Stack = (props: StackProps) => {
    const { children, direction = 'row', alignItems = 'start' } = props;
    return <div>{children}</div>;
};

export default Stack;
