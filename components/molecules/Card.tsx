import Image, { ImageProps } from 'next/image';
import { ReactElement } from 'react';
import Typography from '../atoms/Typography';
import Stack from '../layouts/Stack';

export interface CardProps {
    id?: string;
    imageProps: ImageProps;
    title: string;
    actionSection?: ReactElement;
}

const Card = (props: CardProps) => {
    const { imageProps } = props;
    const { alt, ...restImageProps } = imageProps;
    const { title, actionSection } = props;
    return (
        <Stack>
            <Image alt={alt} {...restImageProps} />
            <Typography variant="title">{title}</Typography>
            {actionSection}
        </Stack>
    );
};

Card.defaultProps = {
    imageProps: { alt: '', src: '' },
};

export default Card;
