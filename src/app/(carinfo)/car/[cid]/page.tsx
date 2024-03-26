import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"

export default async function CarDetailPage( {params} : { params : {cid:string} } ) {
    const carDetail = await getCar(params.cid)

    return (
        <main className="text-center p-2 =">
            <h1 className="mt-10 font-mono text-3xl">{carDetail.data.model}</h1>
            
            <div className="mt-10 mx-auto my-5 w-[50%] p-2 rounded-lg bg-white flex flex-row">
                
                <div className="flex flex-col w-[55%]">
                    <div className="relative w-full h-full">
                        <Image
                        src={carDetail.data.picture}
                        alt='Car Image'
                        layout='fill'
                        objectFit='cover'
                        />
                    </div>
                </div>

                <div className="bg-sky-100 w-[45%] ">
                    <div className="text-lg font-mono text-left">
                        <div className="text-xl text-center mt-6 font-semibold test-sky-500 ">Description</div>
                        {/* <div className="text-center"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div> */}
                            <div className=" ml-10 mt-5">Doors: { carDetail.data.doors }</div>
                            <div className=" ml-10 mt-3">Seats: { carDetail.data.seats }</div>
                            <div className=" ml-10 mt-3">Large Bags: { carDetail.data.largebags }</div>
                            <div className=" ml-10 mt-3">Small Bags: { carDetail.data.smallbags }</div>
                            <div className="ml-10 mt-3 mb-6">Daily Rental Rate: { carDetail.data.dayRate }</div>
                    </div>          

                    <Link href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`}>
                        <button className="block bg-sky-600 hover:bg-blue-700 px-3 py-2 w-full 
                        shadow-sm text-white"> 
                            Make Reservation
                        </button>
                    </Link>
                </div>

            </div>
        </main>
    )
}


export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}