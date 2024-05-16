import { Stack, Typography, Avatar } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Comment } from "../interfaces";

const CommentContent: React.FC<Comment> = ({ profilePic, likes, text, author }) => {
    return (
        <Stack direction={"column"}>
            <Stack direction={"row"} sx={{width: "100%", alignItems: "center"}}>
                <Avatar sx={{ width: 24, height: 24 }} src={profilePic}></Avatar>
                <Stack direction={"column"}>
                    <Typography fontSize={10} sx={{marginLeft: "8px", fontStyle: "italic"}}>
                        {author}
                    </Typography>
                    <Stack direction={"row"} sx={{width: "100%", marginLeft: "8px" }}>
                        <Typography fontSize={12}>{text}</Typography>
                    </Stack>
                </Stack>
                <Stack direction={"column"} sx={{marginLeft: 'auto', alignItems: "center" }}>
                    { likes > 0 ? <FavoriteIcon color='secondary' sx={{marginRight: "8px"}} /> : <FavoriteBorderIcon color='secondary' sx={{marginRight: "8px"}} />}
                    <Typography fontSize={10} sx={{marginRight: "8px"}}>{likes}</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CommentContent;