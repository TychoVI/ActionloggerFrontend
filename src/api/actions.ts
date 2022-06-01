import axios from "axios";
import type Action from "@/types/Action";

export async function getActions(accessToken: string): Promise<Action[]> {
    let authHeader = "Bearer " + accessToken;

    return await axios
        .get(import.meta.env.VITE_API_URL + '/Action', { headers: {"Authorization": authHeader}})
        .then((res) => res.data)
        .catch(console.log)
}