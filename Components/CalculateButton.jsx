const CalculateButton = ({ onClick }) => {

    return (
        <div className="flex flex-row justify-start ">
            <button
                onClick={onClick}
                className="my-4 border-2 rounded-lg px-4 py-1 bg-cyan-800 hover:bg-cyan-600 duration-300"
            >
                Calcular
            </button>
        </div>
    )
};

export default CalculateButton;