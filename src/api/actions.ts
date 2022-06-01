import axios from "axios";
import type Action from "@/types/Action";

export async function getActions(accessToken: string): Promise<Action[]> {
    let authHeader = "Bearer " + accessToken;

    return await axios
        .get("https://staging-actionservice.actionlogger.app/" + '/Action', { headers: {"Authorization": authHeader}})
        .then((res) => res.data)
        .catch(console.log)
}