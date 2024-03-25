import { BookingBody } from "../../interfaces"

export default async function updateBooking(id:string, token:string, formData:BookingBody) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${id}`, {
        method: "PUT",
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