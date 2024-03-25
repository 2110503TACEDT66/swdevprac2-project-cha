import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import { redirect } from "next/navigation"
import getBookings from "@/libs/getBookings"
import { BookingJson } from "../../../interfaces"
import { BookingItem } from "../../../interfaces"
import dayjs from "dayjs"
import EditButton from "@/components/EditButton"
import DeleteButton from "@/components/DeleteButton"

export default async function BookingPage(){

    const session = await getServerSession(authOptions)
    if(!session||!session.user.token){
        redirect('/api/auth/signin');
    };

    const booking:BookingJson = await getBookings(session.user.token);

    return (
        <main>
            <div className="text-2xl text-center">Your Bookings</div>
            {
                booking.data.map((bookItem:BookingItem)=>(
                    <div key={bookItem._id} className="bg-slate-100 rounded w-full m-3 p-3">
                        <div>User: {bookItem.user}</div>
                        <div>Car Model: {bookItem.car.model}</div>
                        <div>Pickup Date: {dayjs(bookItem.pickupDate).format('DD/MM/YYYY')}</div>
                        <div>Pickup Location: {bookItem.pickupLocation}</div>
                        <div>Return Date: {dayjs(bookItem.returnDate).format('DD/MM/YYYY')}</div>
                        <div>Return Location: {bookItem.returnLocation}</div>
                        <EditButton bookId={bookItem._id} token={session.user.token}/>
                        <DeleteButton bookId={bookItem._id} token={session.user.token}/>
                    </div>
                ))
            }
        </main>
    );
}