'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner () {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()
    
    const { data:session } = useSession()
    console.log(session?.user.token)

    return (
        <div className='block p-5 m-0 w-screen h-[580px] relative'
        onClick={ ()=> {setIndex(index+1) }}>
            <Image src={covers[index%3]}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className='relative top-20 z-20 text-center'>
                <h1 className='text-4xl font-mono font-semibold	'>Your Travel Partner</h1>
                <h3 className='text-2xl font-serif font-medium'>Explore Your World with us</h3>
            </div>

            <div className='flex items-center justify-center h-full'>
                <button className='bg-white text-sky-600 border border-cyan-600 font-mono
                    font-semibold py-3 px-5 m-2 rounded z-20 absolute bottom-10 text-xl
                    hover:bg-sky-600 hover:text-white hover:border-transparent'
                    onClick={ (e)=> { e.stopPropagation(); router.push('/car')}}>
                    Select Your Travel Partner NOW
                </button>
            </div>

        </div>
    )
} 