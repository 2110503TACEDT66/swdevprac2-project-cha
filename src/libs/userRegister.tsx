import { RegisterItem } from "../../interfaces";

export default async function userRegister(formData:RegisterItem) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error("Failed to register user");
    }

    return await response.json();
}
