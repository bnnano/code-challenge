import { Button } from "@modulz/design-system";

interface Props {
    text: string;
    onClick: () =>  void;
}

export default function ButtonComponent({ text, onClick }: Props) {
    return (
        <Button
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