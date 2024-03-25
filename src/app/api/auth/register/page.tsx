'use client'

import { useState } from 'react';
import userRegister from '@/libs/userRegister';
import { RegisterItem } from '../../../../../interfaces';
import Image from 'next/image';

export default function RegisterPage() {
    const [formData, setFormData] = useState<RegisterItem>({
        name: '',
        email: '',
        tel: '',
        password: '',
        role: 'user'
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await userRegister(formData);
            window.location.href = '/api/auth/signin';
        } catch (error) {
            console.error(error);
            alert("Failed to register user")
        }
    };

    return (
        <main className="w-full h-full">
            <div className='flex flex-row font-mono'>
            
                <div className=' w-1/3 mt-20 ml-20 mb-20 relative'>
                    <Image src='/img/Pregis.jpg' 
                    alt='register'
                    fill={true} className='object-cover absolute rounded-lg'
                    />
                    <div className="relative top-40 z-20 text-center text-2xl text-gray-600 font-semibold font-medium">
                        <div>" Join us "</div>
                        <div>on our journey</div> 
                        <div>_________________</div>
                    </div>
                </div>
                
                <div className='bg-sky-200 w-2/3 m-20 rounded-3xl text-sky-600 '>
                    <h1 className="text-3xl text-center my-10 font-bold">Register</h1>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="flex items-center w-4/5 my-2 ml-20  " onChange={handleChange}>
                            <label className="w-auto block test-gray-700 pr-4" htmlFor="name">
                                Name</label>
                            <input type="text" required id="name" name="name" placeholder='Name'
                            className='bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400'/>
                        </div>
                        <div className="flex items-center w-4/5 my-2 ml-20" onChange={handleChange}>
                            <label className="w-auto block test-gray-700 pr-4" htmlFor="email">
                                Email</label>
                            <input type="text" required id="email" name="email" placeholder='Email'
                            className='bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400'/>
                        </div>
                        <div className="flex items-center w-4/5 my-2 ml-20" onChange={handleChange}>
                            <label className="w-auto block test-gray-700 pr-4" htmlFor="tel">
                                Tel.</label>
                            <input type="text" required id="tel" name="tel" placeholder='012-345-6789'
                            className='bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400'/>
                        </div>
                        <div className="flex items-center w-4/5 my-2 ml-20" onChange={handleChange}>
                            <label className="w-auto block test-gray-700 pr-4" htmlFor="password">
                                Password</label>
                            <input type="password" required id="password" name="password" placeholder='Minimum 6 characters'
                            className='bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400'/>
                        </div>
                        
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700
                        text-white p-2 rounded ml-20 mb-10">Register</button>
                    </form>
                </div>
                
            </div>
        </main>
    );
}
