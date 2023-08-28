'use client'
import MoonLoader from 'react-spinners/PropagateLoader'

import { useState } from 'react'

const Result = ({ contadoCuotas, cuotasFijasInt }) => {

  let cC = Number(contadoCuotas.toFixed(2));
  let cFi = Number(cuotasFijasInt.toFixed(2));

  const [isLoading, setIsLoading] = useState(true);
  const [isContado, setIsContado] = useState('');
  const [isCuotas, setIsCuotas] = useState('');


  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  const reset = () => {
    window.location.reload();
  };

  const handleOption = () => {
    return cC > cFi || cC === cFi
      ? <h2 className='text-3xl md:text-4xl'>Conviene en Cuotas</h2>
      : <h2 className='text-3xl md:text-4xl'>Conviene de Contado</h2>
  };


  return (
    <div className='w-full flex flex-col items-center justify-start my-10' >
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
        <div className='flex flex-col bg-[#3d4958] bg-gradient-to-t rounded-lg py-6 shadow-2xl border-b-2 border-white items-center justify-center w-[25rem] sm:w-[35rem] md:w-[45rem] '>
          <div className='px-8 py-4 flex flex-col items-start w-full'>
            <div className='flex flex-col items-start w-full'>
              {handleOption()}
            </div>
            <div className='flex flex-col sm:flex-row w-full gap-4'>
              {cC > cFi || cC === cFi ?
                (
                  <>
                    <p className='py-2 text-red-400 text-xl'>{`Contado en cuotas: $${cC}`}</p>
                    <p className='py-2 text-green-400 text-xl'>{`En cuotas fijas: $${cFi}`}</p>
                  </>)
                :
                (
                  <>
                    <p className='py-2 text-green-400 text-xl'>{`Contado en cuotas: $${cC}`}</p>
                    <p className='py-2 text-red-400 text-xl'>{`En cuotas fijas: $${cFi}`}</p>
                  </>
                )
              }

            </div>
          </div>
          <div className='px-8 pt-2 pb-4 flex flex-col items-start w-full'>
            <h2 className='text-3xl md:text-4xl'>Diferencia</h2>
            <div className='flex flex-col items-center text-xl mt-2'>
              {cC > cFi || cC === cFi ?
                (
                  <>
                    <p>
                      Si hubieras elegido de contado, tendrias que pagar de más un:
                    </p>
                    <p className='text-red-600 text-4xl outline-none my-2 hover:scale-110 duration-300'>
                      %{Number(cC / cFi * 100).toFixed(2)}
                    </p>
                  </>
                )
                :
                (
                  <>
                    <p>
                      Si hubieras elegido en cuotas, tendrias que pagar de más un:
                    </p>
                    <p className='text-red-600 text-4xl my-2 hover:scale-105 duration-300'>
                      %{Number(cFi / cC * 100).toFixed(2)}
                    </p>
                  </>
                )}
            </div>
          </div>
          <div className='flex flex-row justify-start w-full px-8 py-2'>
            <button
              onClick={reset}
              className='rounded-lg px-4 py-1 bg-cyan-800 hover:bg-cyan-600 mb-4 text-lg hover:scale-105 duration-300 border border-white'
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default Result;