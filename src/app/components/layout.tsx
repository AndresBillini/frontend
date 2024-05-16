import { Stack } from "@mui/material";
import { FeedContent } from "../interfaces";
import ContentCard from "./card";

interface FeedLayoutProps {
    feed: FeedContent[];
}

const FeedLayout: React.FC<FeedLayoutProps> = ({ feed }) => {
    return (
        <Stack direction="column" sx={{ flexWrap: "wrap", rowGap: "24px", columnGap: "10px", justifyContent: "center", alignContent: "center" }}>
            {
                feed.map((content: FeedContent) => <ContentCard key={content.id} {...content} />)
            }
        </Stack>
    );
};

export default FeedLayout;