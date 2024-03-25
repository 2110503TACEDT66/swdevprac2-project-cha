"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs"; 
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/cartSlice";
import Image from 'next/image';


export default function Reservations() {

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const model = urlParams.get('model')
    
    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = () => {
        if( cid && model && pickupDate && returnDate ) {
            const item:ReservationItem = {
                carId : cid,
                carModel: model,
                numOfDays: returnDate.diff(pickupDate,"day"),
                pickupDate: dayjs(pickupDate).format("YYYY/MM/DD"),
                pickupLocation: pickupLocation,
                returnDate: dayjs(returnDate).format("YYYY/MM/DD"),
                returnLocation: returnLocation
            }
            dispatch(addReservation(item))
        }
    }

    const [pickupDate,setPickupDate] = useState<Dayjs | null>(null)
    const [pickupLocation,setPickupLocation] = useState<string>('BKK')
    const [returnDate,setReturnDate] = useState<Dayjs | null>(null)
    const [returnLocation,setReturnLocation] = useState<string>('BKK')


    return (
        <main className="w-screen mt-20 flex flex-col justify-center items-center">
            <div className="flex flex-row">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-medium"> New Reservation </div>
                    <div className="text-2xl font-medium mt-5"> Car : {model} </div>

                    <div className="space-y-4 m-5">
                        <div className="text-md text-left text-gray-600 ">Pick-Up (Date,Location) </div>
                        <LocationDateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}
                        onLocationChange={(value:string)=>{setPickupLocation(value)}}
                        />
                
                        <div className="text-md text-left text-gray-600">Reture (Date,Location) </div>
                        <LocationDateReserve onDateChange={(value:Dayjs)=>{setReturnDate(value)}}
                        onLocationChange={(value:string)=>{setReturnLocation(value)}}/>                 
                    </div>
                    <button className="block rounded-md bg-sky-600 hover:bg-blue-900 px-3 py-2
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