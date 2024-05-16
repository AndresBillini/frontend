'use client'

import { Button, Card, CardContent, CardMedia, Stack, Typography, Collapse } from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import CommentIcon from '@mui/icons-material/Comment';
import { Comment, FeedContent } from "../interfaces";
import { useCallback, useEffect, useState } from "react";
import CommentContent from './comment-content';
import ExpandInformation from './expand-information';


const ContentCard: React.FC<FeedContent> = ({ id, imageUri, title, subTitle, author, content, numberOfComments, comments }) => {
    const [showReadMore, setShowReadMore] = useState<boolean>(false);
    const [trimmedContent, setTrimmedContent] = useState<string>("");
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const contentTrim = useCallback(() => {
        if (content.length > 300) {
            setShowReadMore(true);
            setTrimmedContent(`${content.slice(0, 300)}...`);
        } else {
            setTrimmedContent(content);
        }
    }, [content]);

    useEffect(() => {
        contentTrim();
    }, [contentTrim]);

    return (
        <Card sx={{ maxWidth: 500, minWidth: 300 }} elevation={8}>
            <CardMedia
                component="img"
                height="500"
                image={imageUri}
                alt={title}
            />
            <CardContent sx={{paddingBottom: "8"}}>
                <Stack direction={"row"} sx={{ alignItems: "baseline", marginBottom: "14px" }}>
                    <Stack direction={"column"}>
                        <Typography sx={{ fontSize: 16 }}>
                            {title}
                        </Typography>
                        <Typography sx={{ fontSize: 10, fontStyle: "italic" }} color="text.secondary">
                            {subTitle}
                        </Typography>
                    </Stack>
                    <Typography sx={{ fontSize: 12, marginLeft: "auto" }}>
                        {author}
                    </Typography>
                </Stack>
                <Typography sx={{ fontSize: 10, wordBreak: "break-all" }}>
                    {trimmedContent} {
                        showReadMore && (
                            <Button
                                size="small" 
                                sx={{ padding: "0", textTransform: "lowercase", fontSize: 11 }} 
                                endIcon={<ReadMoreIcon />}
                                color="secondary"
                            >
                                Read More
                            </Button>
                        )
                    }
                </Typography>
                <Stack direction={"row"} sx={{marginTop: "16px", alignItems: "center"}}>
                    <CommentIcon color="secondary" />
                    <Typography sx={{ fontSize: 10, fontWeight: "bold", marginLeft: "8px" }}>
                        {numberOfComments} {numberOfComments > 1 ? 'Comments' : 'Comment'}
                    </Typography>
                    <ExpandInformation expanded={expanded} handleExpandClick={handleExpandClick} />
                </Stack>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{paddingTop: 0}}>
                    {
                        comments.map((comment: Comment, index: number) => (<CommentContent key={`${id}-${index}`} {...comment} />))
                    }
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ContentCard;