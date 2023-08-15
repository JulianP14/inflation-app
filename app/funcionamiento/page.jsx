
import Link from "next/link";

const HowWeDoIt = () => {


    return (
        <div className="bg-[#0b1623] h-screen flex flex-col items-center justify-start text-white w-screen ">
            <div className="h-full my-6 flex flex-col justify-around">
                <h1 className="text-5xl text-center">Cómo funciona</h1>
                <div className=" flex flex-col justify-center ">
                    <div className=" bg-slate-300 rounded-lg h-full max-w-sm">
                        <div className="bg-[#051429] py-4 rounded-t-md  flex flex-row justify-center border-t-2">
                            <h2 className="text-2xl">Qué Calculamos 🧐</h2>
                        </div>
                        <div className="flex flex-col py-2 px-4 text-black">
                            <p className="text-lg my-2"> 🧿 Al valor de contado le ajustamos la inflación mensual ingresada (se obtiene un valor estimado <strong>constante</strong> para la anual). <strong>Por ejemplo</strong>, si la inflación mensual es <strong>5%</strong>, la anual es <strong>79%</strong>.</p>
                            <p className="text-lg my-2"> 🧿 <strong>Calculamos los valores</strong> y realizamos los cálculos correspondientes para comparar los dos precios (contado vs cuotas).</p>
                            <p className="text-lg my-2"> 🧿 Se obtienen los dos valores y se los divide por la cantidad de <strong>meses ingresados</strong>.</p>
                            <p className="text-lg my-2"> 🧿 Del resultado anterior, <strong>se recomendará</strong> comprar el producto de la forma en la que el valor sea menor.</p>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full py-5 px-4 flex flex-col items-center justify-center rounded-t-3xl bg-[#051429]'>
                <Link
                    href={'/'}
                    className='my-5 flex flex-col justify-center hover:scale-105 duration-300 hover:text-cyan-400'
                >
                    <p className="text-xl ">
                        Volver.
                    </p>
                </Link>
            </div>

        </div>
    )
}

export default HowWeDoIt