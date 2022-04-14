import axios from "axios";
import type Action from "@/types/Action";

export async function getActions(): Promise<Action[]> {
    return await axios
        .get('https://localhost:7002/Action')
        .then((res) => res.data)
        .catch(console.log)
}