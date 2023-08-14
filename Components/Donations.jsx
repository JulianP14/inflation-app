import Image from "next/image"
import Link from "next/link"

const Donations = () => {
    return (
        <div className='flex flex-col justify-around'>
            <div className='flex flex-row justify-center'>
                <Link href={'#'} className='border-2 p-1 px-2 my-2 rounded-lg flex flex-row justify-center w-56 bg-cyan-800 hover:bg-cyan-700 duration-500 '>
                    <button className='mr-2 text-sm'>
                        Invitar un cafecito
                    </button>
                    <Image
                        src={'/imgs/coffee.svg'}
                        width={30}
                        height={30}
                        alt='mplogo'
                    />
                </Link>
            </div>
            <div className='flex flex-row justify-center'>
                <Link href={'https://link.mercadopago.com.ar/julianparera'} target='_blank' className='border-2 p-1 px-2 my-2 rounded-lg flex flex-row justify-center bg-cyan-800 hover:bg-cyan-700 duration-500  w-56 '>
                    <button className='mr-2 text-sm'>
                        Donar por MercadoPago
                    </button>
                    <Image
                        src={'/imgs/mercadolibre.svg'}
                        width={30}
                        height={30}
                        alt='mplogo'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Donations