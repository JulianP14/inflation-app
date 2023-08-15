

import Link from "next/link"

const Footer = () => {



    return (
        <div className=' w-full py-5 px-4 flex flex-col items-center justify-center rounded-t-3xl bg-[#051429]'>
            <Link
                href={'/funcionamiento'}
                className='my-5 flex flex-col justify-center'
            >
                <p className="text-xl hover:scale-105 duration-300 hover:text-cyan-400">
                    Cómo lo hacemos.
                </p>
            </Link>
        </div>
    )
}

export default Footer