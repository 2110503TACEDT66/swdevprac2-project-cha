'use client'
import { useState } from "react"
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useWindowListener } from "@/hooks/useWindowListener"


export default function AboutUs() {
    return (
        <div className="mt-20 rounded-lg bg-white flex flex-col justify-center items-center">
            <div className="text-2xl font-mono font-semibold text-sky-600">ABOUT US</div>
            <div className="mt-5 text-lg font-mono text-center text-sky-600">
                <div>We're dedicated to making every car rental experience with us memorable.</div>
                <div>Beyond just providing cars, we ensure convenience and assurance</div>
                <div>for an excellent experience each time. With top-notch vehicles and professional service,</div>
                <div>we're here to make your journey truly enjoyable and impressive</div>
            </div>
            <div className="flex flex-row mt-5 font-serif text-blue-900">
                <div className='rounded-lg w-[230px] h-[350px] mx-3 my-5 relative '>
                    <Image src={'/img/au1.jpg'} alt='Product Picture'
                        fill={true} className='object-cover absolute rounded-lg shadow-xl'/>
                    <div className="relative top-10 z-20 text-center text-2xl font-medium">Discounts <div> & benefit</div></div>
                </div>
                <div className='rounded-lg w-[230px] h-[350px] mx-3 my-5 relative '>
                    <Image src={'/img/au2.jpg'} alt='Product Picture'
                        fill={true} className='object-cover absolute rounded-lg shadow-xl'/>
                    <div className="relative top-10 z-20 text-center text-2xl font-medium">Daily, weekly <div>or monthly</div></div>
                </div>
                <div className='rounded-lg w-[230px] h-[350px] mx-3 my-5 relative '>
                    <Image src={'/img/au3.jpg'} alt='Product Picture'
                        fill={true} className='object-cover absolute rounded-lg shadow-xl'/>
                    <div className="relative top-10 z-20 text-center text-2xl font-medium">Online <div>check-in</div></div>
                </div>
            </div>
        </div>
    )
}