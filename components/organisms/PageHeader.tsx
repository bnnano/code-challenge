import Typography from '../atoms/Typography';
import Stack from '../layouts/Stack';
import { styled } from '@/stitches.config';

export interface PageHeaderProps {
    title: string;
}

const HeaderContainer = styled(Stack, {
    height: '92px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.07)',
    zIndex: 20,
    position: 'relative',
});

const PageHeader = (props: PageHeaderProps) => {
    const { title } = props;
    return (
        <HeaderContainer
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="pageHeader">{title}</Typography>
        </HeaderContainer>
    );
};

export default PageHeader;
