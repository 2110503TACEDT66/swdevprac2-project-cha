import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function Topmenu() {
    const session = await getServerSession(authOptions)

    return (
            <div className="h-16 bg-sky-600 fixed top-0 left-0 right-0 
            z-30 border-t flex flex-row text-white">
            <Image src={'/img/logo2.jpg'} className='h-full w-auto' alt='logo'
            width={0} height={0} sizes='100vh'/>
            <TopMenuItem title='Select Car' pageRef='/car'/>
            
            <div className='flex flex-row absolute right-0 h-full'>
            <TopMenuItem title='Cart' pageRef='/cart'/>
            {
                session? <Link href="api/auth/signout">
                    <div className='flex items-center h-full px-2 mr-3 text-white text-base'>Sign-Out of {session.user?.name}</div>
                </Link>
                : <div className='flex flex-row pl-5'>
                <Link href="/api/auth/register">
                    <div className='flex items-center h-full pr-6 text-white text-base font-sans'>
                    Register</div>
                </Link>  
                <Link href="/api/auth/signin">
                    <div className='flex items-center h-full px-4 mr-3 text-white text-base font-sans'>
                    Sign-In</div>
                </Link>
                </div>
            } 
            </div>        
        </div>
    );
}