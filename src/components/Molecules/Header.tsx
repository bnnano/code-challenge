import { Section } from "@modulz/design-system";
import Title from "../Atoms/Title";

export default function Header() {
    return (<Section
        size='2'
        css={{
            textAlign: 'center',
            backgroundColor: '#FAFAFA',
            width: '100%',
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.07)',
            fontSize: '15px'
        }}
        >
        <Title>
            Bannano Frontend Challenge
        </Title>
    </Section>)
}