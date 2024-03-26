'use client'

import { useState } from "react"
import { BookingBody } from "../../interfaces";
import updateBooking from "@/libs/updateBooking";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

export default function EditButton({bookId, token}:{bookId:string, token:string}){

    const [ beEditBtn, setEditBtn ] = useState<boolean>(true);

    const [ pickupDate, setPickupDate ] = useState<Dayjs|null>(null);
    const [ pickupLocation, setPickupLocation ] = useState('BKK');
    const [ returnDate, setReturnDate ] = useState<Dayjs|null>(null);
    const [ returnLocation, setReturnLocation ] = useState('BKK');

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData:BookingBody = {
            pickupDate: dayjs(pickupDate).toString(),
            pickupLocation: pickupLocation,
            returnDate: dayjs(returnDate).toString(),
            returnLocation: returnLocation
        }
        console.log(formData);
        try {
            await updateBooking(bookId, token, formData);
            setEditBtn(true);
            window.location.href = '/booking';
        } catch (error) {
            console.error(error);
            alert("Failed to update booking")
        }
    };


    return beEditBtn ? (
        <button className="py-2 px-5 bg-blue-700 text-white rounded mr-5 hover:bg-sky-800"
        onClick={ ()=>{setEditBtn(false)} }>Edit</button>
    ):
    (
        <div>
            <div>_____________________________________________</div>
            <div className="mt-2 text-rose-700 text-center text-lg font-semibold ">Edit</div>
            <form onSubmit={handleSubmit}>
                    <div className="flex items-center my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="pickupDate">
                            Pick-Up (Date)</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="bg-white" name="pickupDate"
                            value={pickupDate}
                            onChange={(value)=>{setPickupDate(value)}}/>
                        </LocalizationProvider>
                    </div>
                    <div className="flex items-center my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="pickupLocation">
                            Pickup (Location)</label>
                        <select required id="pickupLocation" name="pickupLocation"
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'
                        value={pickupLocation}
                        onChange={(e)=>{setPickupLocation(e.target.value)}}>
                            <option value="BKK">Bangkok</option>
                            <option value="CNX">Chiang Mai</option>
                            <option value="HKT">Phuket</option>
                        </select>
                    </div>
                    <div className="flex items-center my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="returnDate">
                            Pick-Up (Date)</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="bg-white" name="returnDate"
                            value={returnDate}
                            onChange={(value)=>{setReturnDate(value)}}/>
                        </LocalizationProvider>
                    </div>
                    <div className="flex items-center my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="pickupLocation">
                            Pickup (Location)</label>
                        <select required id="pickupLocation" name="pickupLocation"
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'
                        value={returnLocation}
                        onChange={(e)=>{setReturnLocation(e.target.value)}}>
                            <option value="BKK">Bangkok</option>
                            <option value="CNX">Chiang Mai</option>
                            <option value="HKT">Phuket</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="bg-sky-600 px-5 hover:bg-blue-700
                    text-white p-2 rounded" onSubmit={ ()=>{setEditBtn(true)} }>Edit</button>

                    <button className="ml-3 mt-2 py-2 px-5 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={ ()=>{setEditBtn(true)} }>Cancel</button>
                    <div>_____________________________________________</div>
                </form>
            
        </div>
    )
}