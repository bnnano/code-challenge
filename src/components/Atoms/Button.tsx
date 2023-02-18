import { Button } from "@modulz/design-system";

interface Props {
    id: string;
    text: string;
    onClick: () =>  void;
}

export default function ButtonComponent({ id, text, onClick }: Props) {
    return (
        <Button
            data-testid={id}
            size='3'
            css={{
                color: 'White',
                backgroundColor: '#004368'
            }}
            onClick={onClick}
            >{text}
        </Button>
    )
}