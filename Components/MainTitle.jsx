import Image from "next/image"

const MainTitle = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='rounded-full border-2 p-2'>
                <Image
                    src={'/imgs/money.svg'}
                    width={80}
                    height={40}
                    alt='logo'
                    className='p-1'
                />
            </div>
            <div className=''>
                <h1 className='font-bold text-3xl py-4 px-2 text-center'>Calculadora de Inflación.</h1>
                <h2 className='text-2xl mb-2 text-center'>Te ayudamos a decidir si comprar, o no, en cuotas.</h2>
            </div>
        </div>
    )
};

export default MainTitle;