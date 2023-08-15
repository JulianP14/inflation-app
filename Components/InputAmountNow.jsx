
const InputAmountNow = ({ onChange }) => {
    
    return (
        <div className='flex flex-col my-2'>
            <label className='flex flex-col my-2'>
                <div className='flex flex-row'>
                    <span className='mr-2'>
                        Ingresa el precio de contado
                    </span>
                    <span>💰</span>
                </div>
            </label>
                <input
                    type='number'
                    className=''
                    onBlur={onChange}

                />
        </div>
    )
};

export default InputAmountNow;