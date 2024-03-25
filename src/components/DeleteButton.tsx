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
        <button className="m-5 py-2 px-5 bg-red-600 text-white rounded"
        onClick={ ()=>{ deleteBtn() }}>Delete</button>
    )
}