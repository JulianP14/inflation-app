'use client'
import MoonLoader from 'react-spinners/PropagateLoader'
import { useState } from 'react'

const Result = ({ contadoCuotas, cuotasFijasInt }) => {

    const [isLoading, setIsLoading] = useState(true)

    let cC = Number(contadoCuotas.toFixed(2));
    let cFi = Number(cuotasFijasInt.toFixed(2));

    setTimeout(() => {
        setIsLoading(false)
    }, 2000);

    const reset = () => {
        window.location.reload();
    };

    const determineOption = () => {
        if (cC > cFi || cC == cFi) {
            return <h2 className='text-2xl'>Conviene en Cuotas</h2>
        }
        else {
            return <h2 className='text-2xl'>Conviene de Contado</h2>
        }
    };

    return (
        <div className='w-80 flex flex-col items-center justify-start my-10 py-4' >
            {isLoading ? (
                <MoonLoader
                    color={'#fff'}
                    loading={isLoading}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className={'mt-4'}
                />
            ) : (
                <div className='p-8 flex flex-col items-start rounded-lg  shadow-2xl  duration-300 bg-gradient-to-t border-2 '>
                    <div className='mb-4'>
                        <h1 className='text-5xl'>Resultado</h1>
                    </div>
                    <div>
                        {determineOption()}
                    </div>
                    <div className='flex flex-col'>
                        <p className='py-2'>{`Dato contado: $ ${cC}`}</p>
                        <p className='py-2'>{`Dato cuotas: $ ${cFi}`}</p>
                    </div>
                    <button
                        onClick={reset}
                        className='border-2 rounded-lg px-4 py-1 bg-cyan-800 hover:bg-cyan-600 mt-6 text-lg hover:scale-105 duration-300'
                    >
                        Volver
                    </button>
                </div>
            )}
        </div>
    )
}

export default Result