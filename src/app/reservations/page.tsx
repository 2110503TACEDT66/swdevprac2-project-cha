import Reservation from "@/components/Reservation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation"

export default async function ReservationsPage() {

    const session = await getServerSession(authOptions);
    if(!session||!session.user.token){
        redirect('/api/auth/signin');
    };

    return (
        <Reservation token={session.user.token}/>
    );
}