'use client'

import deleteBooking from "@/libs/deleteBooking"

export default function DeleteButton({bookId, token}:{bookId:string, token:string}){

    const deleteBtn = async ()=>{
        try{
            await deleteBooking(bookId, token)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button className="mt-3 py-2 px-5 bg-rose-700 text-white rounded hover:bg-red-800"
        onClick={ ()=>{ deleteBtn() }}>Delete</button>
    )
}