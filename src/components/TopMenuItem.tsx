import Link from "next/link";

export default function TopMenuItem( { title , pageRef } : { title : string , pageRef : string }  ) {
    return (
        <Link href={pageRef} className='w-120 mx-5 flex items-center h-full px-2 
        font-sans text-base text-white'>
            {title}
        </Link>
    );
}