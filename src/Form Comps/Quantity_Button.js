import React from 'react'

const Quantity_Button = ({ onClick, label }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className=" bg-gold rounded-full text-black font-p w-9 h-9 drop-shadow-md
        hover:bg-white hover:font-semibold active:bg-light_green active:text-white  transition ease-in-out duration-450 "
      >
        <p className='text-black font-p font-[18pt]'>{label}</p>
      </button>
    </>
  )
}

export default Quantity_Button
