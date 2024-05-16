import { Stack } from "@mui/material";
import FeedLayout from "./components/layout";
import { FeedContent } from "./interfaces";

const getContentFeed = async (): Promise<FeedContent[]> => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/content-feed`);
        const feed: FeedContent[] = await data.json();

        return feed;
    } catch (err) {
        return [];
    }
};

export default async function Post() {
    const feed: FeedContent[] = await getContentFeed();
    
    return (
        <>
            {
                feed.length > 0
                    ? <FeedLayout feed={feed} />
                    : <Stack direction={"column"} sx={{ alignItems: "center", justifyContent: "center", height: "100vh"}}>
                        <h2>There is no feed to show</h2>
                    </Stack>
            }
        </>
    );
};