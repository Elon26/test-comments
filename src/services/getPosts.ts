import axios from "axios";
import { IPost } from "../models";

async function getPosts(): Promise<IPost[]> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = response.data as IPost[];
    return data;
}

export default getPosts;
