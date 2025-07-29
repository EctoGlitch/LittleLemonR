import { ErrorMessage, useFormikContext } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { forwardRef } from 'react'
import calendarIcon_white from '../Img/icons_assets/clock_white.png'
import calendarIcon_green from '../Img/icons_assets/clock_green.png'

const ExpirySelector = ({ label, name, touched, error }) => {
  const { setFieldValue, values, setFieldTouched } = useFormikContext()

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => {
    const isPlaceholder = !value
    const imageSrc = isPlaceholder ? calendarIcon_green : calendarIcon_white
    const textColorClass = isPlaceholder ? 'text-black' : 'text-white'
    const bgColorClass = isPlaceholder ? 'bg-[#fff]' : 'bg-dark_green'
    const arrowFill = isPlaceholder ? '#495e57' : '#edefee'

    return (
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        className={`w-full h-[80px] relative font-p py-6 rounded-4xl focus:outline-black appearance-none text-center flex items-center justify-between px-4 ${textColorClass} ${bgColorClass}`}
      >
        <img
          src={imageSrc}
          alt="Calendar Icon"
          className="w-6 h-6 block"
        />
        <span className="flex-grow">{value || "mm/yyyy"}</span>
        <svg className={`fill-current h-4 w-4 dropdown-arrow ${!isPlaceholder ? 'rotated' : ''}`}
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             style={{ fill: arrowFill }}>
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </button>
    )
  })

  return (
    <>
    <div className='flex flex-col'>
        <label className='font-p text-black font-bold py-3'>{ label }</label>
        <DatePicker
            selected={values[name] && !isNaN(new Date(values[name])) ? new Date(values[name]) : null}
            onChange={date => {
                setFieldValue(name, date ? date.toISOString() : '')
                setFieldTouched(name, true)
            }}
            onBlur={() => setFieldTouched(name, true)}
            name={name}
            showMonthYearPicker
            dateFormat="MM/yyyy"
            placeholder="MM/yyyy"
            popperClassName="react-datepicker-popper "
            customInput={<CustomDateInput />}
            isClearable={true}
            onCalendarClose={() => setFieldTouched(name, true)}
            minDate={new Date()} // Prevents selection of dates before today
        />
        {touched && error ? (
            <div className='h-10 text-red-700 py-4'>
                <ErrorMessage className='error font-p font-semibold' name={ name } component="div" />
            </div>) : (
                <div className='h-10 text-red-700 py-4'></div>
            )
        }
    </div>
    </>
  )
}
export default ExpirySelector
