import axios from "axios";
import { IComment } from "../models";

async function getCommentsByPostID(postId: string): Promise<IComment[]> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const data = response.data as IComment[];
    return data;
}

export default getCommentsByPostID;
