import { CarItem, CarJson } from "../../interfaces"
import Image from "next/image"

export default function Provider({carJson}:{carJson:CarJson}) {
    const carJsonReady = carJson
    return (
        <>
            <h1 className="my-10 text-xl">List of All Providers of These {carJsonReady.count} Cars </h1>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
                {carJsonReady.data.map((carItem:CarItem, index: number)=> (
                    <div key={index} className="flex justify-center items-center bg-gray-200">
                        <Image src={carItem.picture} alt="Car Image" width={200} height={200} objectFit="cover" />
                    </div>
                ))}
            </div>
        </>
    )
}