import Image, { ImageProps } from 'next/image';
import { ReactElement } from 'react';
import Typography from '../atoms/Typography';
import Stack from '../layouts/Stack';

export interface CardProps {
    id?: string;
    imageProps: ImageProps;
    title: string;
    description: string;
    actionSection?: ReactElement;
}

const Card = (props: CardProps) => {
    const { imageProps } = props;
    const { alt, ...restImageProps } = imageProps;
    const { title, description, actionSection } = props;
    return (
        <Stack>
            <header>
                <Image alt={alt} {...restImageProps} />
            </header>
            <main>
                <Typography variant="title">{title}</Typography>
                <Typography>{description}</Typography>
            </main>
            <footer>{actionSection}</footer>
        </Stack>
    );
};

Card.defaultProps = {
    imageProps: { alt: '', src: '' },
};

export default Card;
