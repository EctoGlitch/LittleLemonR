import { ErrorMessage, useFormikContext } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { forwardRef } from 'react'
import clockIcon from '../Img/icons_assets/clock.png'

const ExpirySelector = ({ label, name, touched, error }) => {
  const { setFieldValue, values, setFieldTouched } = useFormikContext()

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <div className="relative">
      <input
        type="text"
        className='h-[80px] w-full relative text-black font-p p-6 rounded-4xl focus:outline-black focus:ring-2 focus:ring-yellow-500'
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder="MM/yyyy"
        readOnly
      />
      <img
        src={clockIcon}
        alt="Calendar Icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6"
      />
    </div>
  ));

  return (
    <div className='flex flex-col'>
        <label className='font-p text-black font-bold py-3'>{ label }</label>
        <DatePicker
            selected={values[name] && !isNaN(new Date(values[name])) ? new Date(values[name]) : null}
            onChange={date => {
                setFieldValue(name, date ? date.toISOString() : '');
                setFieldTouched(name, true);
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
  )
}
export default ExpirySelector
