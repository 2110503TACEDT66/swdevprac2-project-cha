"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"

export default function ReservationCart() {
    const carItems = useAppSelector( (state)=> state.cartSlice.carItems )
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            <div className="flex justify-center mt-30">
                <div className="mt-10 text-2xl text-rose-500 ">-You can reserve a maximum of 3 cars only-</div>
            </div>
        {
            carItems.map((reservationsItem)=>(
                <div className="mx-auto my-10 w-[40%] shadow-lg p-2 rounded-lg bg-red-200 flex flex-row ">
                    <div className='w-60 h-40 bg-white m-5'> </div>
                    <div className="m-5 py-3 px-3 font-mono">
                        <div className="text-2xl">{reservationsItem.carModel}</div>
                        <div className="text-base">Pick-up: {reservationsItem.pickupDate}  From {reservationsItem.pickupLocation}</div>
                        <div className="text-base">Return: {reservationsItem.returnDate}  From {reservationsItem.returnLocation}</div>
                        <div className="text-base ">Duration: {reservationsItem.numOfDays} days</div>
                        <button className="block rounded-md bg-rose-600 mt-3 text-white hover:bg-rose-900 px-3 py-2
                        shadow-sm text-black" onClick={ ()=> dispatch(removeReservation(reservationsItem))}>
                        remove
                        </button>
                    </div>
                </div>
            ))
        }
        </>
    )
}