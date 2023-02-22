import { styled } from '@/stitches.config';

const Typography = styled('p', {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    color: '$bluegrey',
    variants: {
        variant: {
            link: {
                color: '$lightBluegrey',
            },
            cardTitle: {
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: '22px',
                color: '$darkBluegrey',
            },
            pageHeader: {
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '25px',
                letterSpacing: '-2%',
                color: '$darkBluegrey',
            },
        },
        textAlign: {
            center: {
                textAlign: 'center',
            },
        },
    },
});

export default Typography;
