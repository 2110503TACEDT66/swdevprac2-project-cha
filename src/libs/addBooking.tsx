import { BookingBody } from "../../interfaces"

export default async function addBooking(id:string, token:string, formData:BookingBody) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${id}/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    if(!response.ok) {
        throw new Error("Failed to update booking")
    }
    return await response.json()
}