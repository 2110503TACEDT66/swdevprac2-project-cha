import getCars from "@/libs/getCars"
import { CarJson } from "../../../interfaces"
import Provider from "@/components/Provider"

export default async function ProviderPage() {
    const cars:CarJson = await getCars()

    return (
        <main className="text-center p-5">
            <div className="mx-auto my-10 w-[75%] shadow-lg font-semibold p-2 rounded-lg bg-sky-200 flex flex-col items-left">
                <Provider carJson={cars}/>
                <div className="text-lg mt-5">Provider Name: Kururin</div>
                <div className="text-lg">Simulated Universe, Herta Space Station</div>
                <div className="text-lg mb-6">012-345-6789</div>
            </div>
        </main>
    )
}

/*
    Provider -> name address tel cars
*/