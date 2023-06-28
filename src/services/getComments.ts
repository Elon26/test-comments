import axios from "axios";
import { IComment } from "../models";

async function getComments(): Promise<IComment[]> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    const data = response.data as IComment[];
    return data;
}

export default getComments;
