import Typography from "../atoms/Typography";
import Stack from "../layouts/Stack";

export interface PageHeaderProps {
    title: string;
}

const PageHeader = (props: PageHeaderProps) => {
    const { title } = props;
    return (
        <Stack direction="row" alignItems="center">
            <Typography variant="header">{title}</Typography>
        </Stack>
    );
};

export default PageHeader;
