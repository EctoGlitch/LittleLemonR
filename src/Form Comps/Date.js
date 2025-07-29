import { ErrorMessage, useFormikContext } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { forwardRef } from 'react'
import clockIcon_green from '../Img/icons_assets/clock_green.png'
import clockIcon_white from '../Img/icons_assets/clock_white.png'

const DateSelector = ({ label, name, touched, error, dispatch, 'aria-label': ariaLabel, 'aria-invalid': ariaInvalid, 'aria-describedby': ariaDescribedBy }) => {
  const { setFieldValue, values, setFieldTouched } = useFormikContext()

  const isDateSelected = values[name] && !isNaN(new Date(values[name]))
  const inputClasses = `h-[80px] w-full relative font-p p-6 rounded-4xl focus:outline-black focus:ring-2 focus:ring-yellow-500 ${isDateSelected ? 'text-white bg-dark_green' : 'text-black bg-[#fff]'} ${touched && error ? 'border-2 border-red-700' : ''}`
  const labelClasses = `font-p font-bold py-3 ${isDateSelected ? 'text-white' : 'text-dark_green'}`
  const iconSrc = isDateSelected ? clockIcon_white : clockIcon_green

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <div className="relative">
        <input
          type="text"
          className={inputClasses}
          onClick={onClick}
          ref={ref}
          value={value}
          readOnly
          placeholder="yyyy/MM/dd"
          aria-label={ariaLabel || label}
        />
      <img
        src={iconSrc}
        alt="Calendar Icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6"
      />
    </div>
  ))

  return (
    <>
      <div className='flex flex-col'>
          <label className={labelClasses}>{ label }</label>
          <DatePicker
              selected={isDateSelected ? new Date(values[name]) : null}
              onChange={date => {
                  setFieldValue(name, date ? date.toISOString() : '')
                  setFieldTouched(name, true)
                  dispatch(date)
                  setFieldValue('time', '')
              }}
              onBlur={() => setFieldTouched(name, true)}
              dateFormat="yyyy/MM/dd"
              name={name}
              placeholderText="yyyy/MM/dd"
              popperClassName="react-datepicker-popper"
              customInput={<CustomDateInput />}
              isClearable={true}
              minDate={new Date()}
              onCalendarClose={() => setFieldTouched(name, true)}
              aria-label={ariaLabel || label}
          />
          {touched && error ? (
              <div className='h-10 text-red-700 py-4' id={`${name}-error`}>
                  <ErrorMessage className='error font-p font-semibold' name={ name } component="div" />
              </div>) : (
              <div className='h-10 text-red-700 py-4'></div>
              )
          }
      </div>
    </>
  )
}
export default DateSelector
