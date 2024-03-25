import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import { redirect } from "next/navigation"
import getBookings from "@/libs/getBookings"
import { BookingJson } from "../../../interfaces"
import { BookingItem } from "../../../interfaces"
import dayjs from "dayjs"
import EditButton from "@/components/EditButton"
import DeleteButton from "@/components/DeleteButton"
import Image from "next/image"

export default async function BookingPage(){

    const session = await getServerSession(authOptions)
    if(!session||!session.user.token){
        redirect('/api/auth/signin');
    };

    const booking:BookingJson = await getBookings(session.user.token);

    return (
        <main>

            <div className="mt-20 text-2xl text-center font-mono font-semibold text-sky-600">Your Bookings</div>
            <div className="text-lg text-center font-mono text-rose-400 ">(You can reserve a maximum of 3 cars only)</div>
            {
                booking.data.map((bookItem:BookingItem)=>(
                    <div className="mx-auto my-10 w-[48%] shadow-lg p-2 rounded-lg  flex flex-row 
                    bg-gradient-to-r from-sky-200 via-blue-300 to-blue-200">         
                        <div className='w-[230px] h-[200px] mx-3 my-5 bg-white relative'> 
                            <Image src={'/img/booking.jpg'} 
                            alt='booking'
                            fill={true} className='object-cover absolute shadow-xl'
                            />
                        </div>

                        <div className="ml-5 mt-5 py-3 px-3 font-mono text-base text-sky-950">
                            <div key={bookItem._id}>        
                                <div>User: {bookItem.user}</div>
                                <div>Car Model: {bookItem.car.model}</div>
                                <div>Pickup Date: {dayjs(bookItem.pickupDate).format('DD/MM/YYYY')}</div>
                                <div>Pickup Location: {bookItem.pickupLocation}</div>
                                <div>Return Date: {dayjs(bookItem.returnDate).format('DD/MM/YYYY')}</div>
                                <div>Return Location: {bookItem.returnLocation}</div>
                                <EditButton bookId={bookItem._id} token={session.user.token}/>
                                <DeleteButton bookId={bookItem._id} token={session.user.token}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </main>
    );
}