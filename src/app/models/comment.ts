
export class Comment {
    id: number;
    level: number;
    user: string;
    time: number;
    time_ago: string;
    text: string;
    deleted: boolean;
    comments: Comment[];
    kids: Number[];
    children: Comment[];
}
