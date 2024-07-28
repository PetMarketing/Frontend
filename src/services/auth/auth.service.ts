import { ILogin } from "@/types/ILogin"

const baseURL = process.env.NEXT_PUBLIC_API_KEY

export const login = async (data: ILogin) => {
    const res = await fetch(`${baseURL}/category`)

    const test = await res.json();

    return test;
}