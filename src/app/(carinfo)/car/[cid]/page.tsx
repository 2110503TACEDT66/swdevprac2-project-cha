import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"

export default async function CarDetailPage( {params} : { params : {cid:string} } ) {
    const carDetail = await getCar(params.cid)

    return (
        <main className="text-center p-2">
            <h1 className="text-xl mt-10 text-3xl font-serif  ">{carDetail.data.model}</h1>
            <div className="mx-auto my-5 w-[30%] p-2 rounded-lg bg-white flex flex-col">
                <div className="relative w-full h-60">
                    <Image
                    src={carDetail.data.picture}
                    alt='Car Image'
                    layout='fill'
                    objectFit='cover'
                    />
                </div>
                <div className="bg-sky-600 text-white text-lg text-center font-serif py-2"> Description </div>   
                <div className="text-md bg-sky-200 font-mono py-3 text-left">
                        <div className="text-md ml-10">Name: { carDetail.data.description }</div>
                        <div className="text-md ml-10">Doors: { carDetail.data.doors }</div>
                        <div className="text-md ml-10">Seats: { carDetail.data.seats }</div>
                        <div className="text-md ml-10">Large Bags: { carDetail.data.largebags }</div>
                        <div className="text-md ml-10">Small Bags: { carDetail.data.smallbags }</div>
                        <div className="text-md ml-10">Daily Rental Rate: { carDetail.data.dayRate }</div>
                </div>          
            </div>
                
            <div className='flex items-center justify-center h-full'>
                <Link href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-blue-900 px-3 py-2
                    shadow-sm text-white">
                        Make Reservation
                    </button>
                </Link>
            </div>

        </main>
    )
}


export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}