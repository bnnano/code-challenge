interface Props {
    children: string
}

export default function Title(props: Props) {
    return <h1>{props.children}</h1>
}