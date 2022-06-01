import axios from "axios";
import type Meeting from "@/types/Meeting";

export async function getMeetings(accessToken: string): Promise<Meeting[]> {
    let authHeader = "Bearer " + accessToken;

    return await axios
        .get(import.meta.env.VITE_API_URL + '/Meeting', { headers: {"Authorization": authHeader}})
        .then((res) => res.data)
        .catch(console.log)
}