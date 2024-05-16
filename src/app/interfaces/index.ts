export interface FeedContent {
    id: string;
    imageUri: string;
    title: string;
    subTitle: string;
    author: string;
    content: string;
    numberOfComments: number;
    comments: Comment[];
}

export interface Comment {
    text: string;
    author: string;
    profilePic: string;
    likes: number;
}