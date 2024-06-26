import getCars from "@/libs/getCars"
import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { CarJson } from "../../../../interfaces"

export default async function Car() {
    const cars:CarJson = await getCars()

    return (
        <main className="text-center p-5 mt-10 font-mono  text-sky-700">
            <h1 className="text-2xl font-semibold mb-3">Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CarCatalog carJson={cars}/>
            </Suspense>
        </main>
    )
}