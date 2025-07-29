import Drop_Down from '../Form Comps/Drop_Down'
import clockIcon_white from '../Img/icons_assets/clock_white.png'
import clockIcon_green from '../Img/icons_assets/clock_green.png'

const TimeSelector = ({ label, name, touched, error, availableTimes, 'aria-label': ariaLabel, 'aria-invalid': ariaInvalid, 'aria-describedby': ariaDescribedBy }) => {

  const timeOptions = availableTimes.map(time => ({
    label: time,
    value: time
  }))

  return (
    <>
      <Drop_Down
        label={label}
        name={name}
        img_defualt={clockIcon_green}
        img_active={clockIcon_white}
        img_w='w-6'
        img_h='h-6'
        options={timeOptions}
        touched={touched}
        error={error}
        aria-label={ariaLabel || label}
        aria-invalid={ariaInvalid || (touched && error ? "true" : "false")}
        aria-describedby={ariaDescribedBy || (touched && error ? `${name}-error` : undefined)}
      />
    </>
  )
}
export default TimeSelector
