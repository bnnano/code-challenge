import { TextField } from "@modulz/design-system";

interface Props {
    value: string;
    onChange: (value: string) => void
}

export default function Search({ value, onChange }: Props) {
    return (
        <TextField
            value={value}
            onChange={(event) => onChange(event.target.value)}
            size='2'
            css={{
                height: '$7'
            }}
            placeholder='Search..'
        />
    )
}