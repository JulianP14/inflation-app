import React from 'react'

const InputAmountNow = ({ onChange }) => {
    return (
        <div className='flex flex-col my-2'>
            <label className='flex flex-col my-2'>
                <div className='flex flex-row'>
                    <span className='mr-2'>Ingresa el precio de contado</span>
                    <span>💰</span>
                </div>
                <input
                    type='number'
                    className='border-b-2 border-white rounded-lg p-1 px-2 bg-transparent hover:border-b-cyan-400 duration-300 outline-none text-white'
                    onBlur={onChange}

                />
            </label>
        </div>
    )
}

export default InputAmountNow