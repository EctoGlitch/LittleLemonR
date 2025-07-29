import React from 'react'

function Checkbox_Extras({ label, value, price, name, onChange, checked, 'aria-label': ariaLabel }) {
  return (
    <label className='w-full h-[60px] py-4 flex flex-row-reverse justify-between align-middle'>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        aria-label={ariaLabel || label}
      />
      <span className='flex flex-row w-[22rem] justify-between'>
        <p className='font-p font-semibold text-black'>{label}</p>
        <div className='w-[2rem]'><p className='font-p font-semibold text-black' aria-label={`Price: $${price}`}>${price}</p></div>
      </span>
    </label>
  )
}

export default Checkbox_Extras
