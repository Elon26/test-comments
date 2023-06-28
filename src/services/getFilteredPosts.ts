import axios from "axios";
import { IPost } from "../models";

async function getFilteredPosts(filter: string): Promise<IPost[]> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?title_like=${filter}`);
    const data = response.data as IPost[];
    return data;
}

export default getFilteredPosts;
