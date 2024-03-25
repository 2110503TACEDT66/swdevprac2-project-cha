'use client'
import { useState } from "react"
import { VlogPlayer } from "./VlogPlayer"
import { Rating } from "@mui/material"
import { useWindowListener } from "@/hooks/useWindowListener"
 
export function TravelCard() {

    const [playing,setPlaying] = useState(true)
    const [rating,setRating] = useState(0)

    return (
        <div className="w-[100%] mt-20 rounded-lg bg-white flex flex-col justify-center items-center">
            <VlogPlayer vdoSrc="/video/ThailandNatural.mp4" isPlaying={playing}></VlogPlayer>
            <div className="m-5">
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm"
                onClick={ ()=> { setPlaying(!playing) } }>
                { playing? 'Pause':'Play'}
                </button>
            </div>
            
        </div>
    )
}

{/* <Rating className="w-full h-[10%]" value={ (rating==undefined)? 0:rating }
onChange={ (e,newValue)=>{if(newValue!=null) setRating(newValue)} } /> */}
