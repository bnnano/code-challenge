import Image, { ImageProps } from 'next/image';
import { ReactElement } from 'react';
import Typography from '../atoms/Typography';
import Stack from '../layouts/Stack';
import { styled } from '@/stitches.config';

export interface CardProps {
    id?: string;
    imageProps: ImageProps;
    title: string;
    description: string;
    actionSection?: ReactElement;
}

const CardContainer = styled(Stack, {
    flexDirection: 'column',
});

const ImageContainer = styled(Stack, {
    position: 'relative',
    minWidth: '300px',
    maxWidth: '320px',
    height: '167px',
});

const FitImage = styled(Image, {
    objectFit: 'contain',
    paddingTop: '$4',
    paddingBottom: '$4',
    paddingLeft: '$8',
    paddingRight: '$8',
});

const CardBody = styled(Stack, {
    padding: '$8',
    backgroundColor: 'white',
    borderRadius: '0 0 8px 8px',
});

const CardHeader = styled('header', {
    backgroundColor: '$lightBrowngrey',
    borderRadius: '8px 8px 0 0',
});

const Card = (props: CardProps) => {
    const { imageProps } = props;
    const { alt, ...restImageProps } = imageProps;
    const { title, description, actionSection } = props;
    return (
        <CardContainer>
            <CardHeader>
                <ImageContainer>
                    <FitImage alt={alt} {...restImageProps} />
                </ImageContainer>
            </CardHeader>
            <CardBody direction="column" gap="8">
                <main>
                    <Stack direction="column" gap="3">
                        <Typography variant="cardTitle">{title}</Typography>
                        <Typography>{description}</Typography>
                    </Stack>
                </main>
                <footer>{actionSection}</footer>
            </CardBody>
        </CardContainer>
    );
};

Card.defaultProps = {
    imageProps: { alt: '', src: '' },
};

export default Card;
