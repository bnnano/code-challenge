import { Box, Card, Text } from "@modulz/design-system";
import { styled } from "@stitches/react";
import Image from 'next/image'

interface Props {
    title: string;
}

export default function PokemonCard({ title }: Props) {
    return (
        <Box
            css={{ p: '$3',width: '100%' }}>
            <Card
                css={{ p: '$3'}}
            >
                <div style={{ textAlign: 'center'}}>
                    <Image
                        src={`https://img.pokemondb.net/artwork/large/${title}.jpg`}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                    />
                </div>
                <div style={{
                    paddingLeft: '32px',
                    paddingRight: '32px',
                    paddingTop: '32px',
                }}>
                    <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                        {title.toUpperCase()}
                    </Text>
                    <Text variant="gray" css={{ lineHeight: '22px', marginBottom: '$7'}}>
                        This is {title}!
                    </Text>
                    <Text variant='blue' css={{ lineHeight: '22px' }}>
                        <a href="#">Details →</a>
                    </Text>
                </div>
            </Card>
        </Box>
    )
}