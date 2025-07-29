const ClearCartButton = ({ label, onClick, 'aria-label': ariaLabel }) => {
    return (
        <button
            onClick={onClick}
            className="bg-gold rounded-4xl text-black font-p h-desktop_btn px-11 drop-shadow-md
                hover:bg-white hover:font-semibold active:bg-light_green active:text-white disabled:bg-light_orange disabled:cursor-not-allowed transition ease-in-out duration-450"
            aria-label={ariaLabel || label}
        >
            {label}
        </button>
    )
}

export default ClearCartButton
