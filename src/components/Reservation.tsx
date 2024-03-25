"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs"; 
import { BookingBody } from "../../interfaces";
import addBooking from "@/libs/addBooking";
import Image from 'next/image';


export default function Reservation({token}:{token:string}) {

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const model = urlParams.get('model')

    const makeReservation = async () => {
        if( cid && model && pickupDate && returnDate ) {
            const formData:BookingBody = {
                pickupDate: dayjs(pickupDate).format("YYYY/MM/DD"),
                pickupLocation: pickupLocation,
                returnDate: dayjs(returnDate).format("YYYY/MM/DD"),
                returnLocation: returnLocation
            }
            try {
                await addBooking(cid, token, formData)
                window.location.href = '/booking';
            } catch (error){
                console.log(error)
                alert("Failed to reserve")
            }
        }
    }

    const [pickupDate,setPickupDate] = useState<Dayjs | null>(null)
    const [pickupLocation,setPickupLocation] = useState<string>('BKK')
    const [returnDate,setReturnDate] = useState<Dayjs | null>(null)
    const [returnLocation,setReturnLocation] = useState<string>('BKK')


    return (
        <main className="w-screen mt-20 flex flex-col justify-center items-center">
            <div className="flex flex-row font-mono text-sky-600">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-medium"> New Reservation </div>
                    <div className="text-2xl font-medium mt-5"> Car : {model} </div>

                    <div className="space-y-4 m-5 mt-10 ">
                        <div className="text-md text-left text-sky-500">Pick-Up (Date,Location) </div>
                        <LocationDateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}
                        onLocationChange={(value:string)=>{setPickupLocation(value)}}
                        />
                
                        <div className="text-md text-left text-sky-500">Reture (Date,Location) </div>
                        <LocationDateReserve onDateChange={(value:Dayjs)=>{setReturnDate(value)}}
                        onLocationChange={(value:string)=>{setReturnLocation(value)}}/>                 
                    </div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        shadow-sm text-white" onClick={makeReservation}>
                        Reserve this Car
                    </button>
                </div>

                <div className="rounded-lg w-[200px] h-[400px] mx-3 my-5 relative">
                    <Image src='/img/calendar.jpg' 
                    alt='calendar'
                    fill={true} className='object-cover absolute rounded-lg'
                    />
                </div>

            </div>
        </main>
    );
}