'use client'

import Link from "next/link"
import { useState } from "react";
const Footer = () => {

    const [isHowActive, setIsHowActive] = useState(true);

    const showHow = (e) => {
        e.preventDefault();
        if (!isHowActive) {
            return setIsHowActive(!isHowActive);
        } else {
            return setIsHowActive(!isHowActive)
        }
    }

    return (
        <div
            className=' w-full py-5 px-4 flex flex-col items-center justify-center rounded-t-3xl bg-[#051429]'
        >
            {isHowActive ? (
                <Link
                    href={'/funcionamiento'}
                    className='my-5 flex flex-col justify-center'
                    onClick={showHow}
                >
                    <p className="text-xl">Cómo lo hacemos.</p>
                </Link>
            ) : (
                <Link href={'/'} className='my-5 flex flex-col justify-center'>
                    <p className="text-xl">Volver.</p>
                </Link>
            )}

        </div>
    )
}

export default Footer