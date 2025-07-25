import Button from '../Form Comps/Button'
import Button_full from '../Form Comps/Button_full'
import Text_Input from '../Form Comps/Text_Input'
import Drop_Down from '../Form Comps/Drop_Down'

import { occasions, num_of_diners } from './Drop_Down_Context'

import DateSelector from '../Form Comps/Date'
import TimeSelector from '../Form Comps/Time'
import Radio from '../Form Comps/Radio'

import { Link } from 'react-router-dom'

import Wrapper from './Wrapper'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import glasses_green from '../Img/icons_assets/glasses-green.png'
import glasses_white from '../Img/icons_assets/glasses-white.png'

import green_group from '../Img/icons_assets/group_green.png'
import white_group from '../Img/icons_assets/group_white.png'

const Reservations = ({ onContinueToBilling, initialValues }) => {
    const defaultInitialValues = { user_name: '', email: '', phone: '', date: '', time: '', num_of_diners: '', occasion: '', seating: '' };
    const currentInitialValues = Object.keys(initialValues).length > 0 ? initialValues : defaultInitialValues;

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object({
        user_name: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, 'Phone number not long enough.'),
        date: Yup.string().required('Must enter a date'),
        time: Yup.string().required('Must enter a time slot'),
        occasion: Yup.string(),
        num_of_diners: Yup.string().required('Must indicate number of guests.'),
        seating: Yup.string().required('Must pick seating options.')
    })

    const onSubmit = (values) => {
        console.log('Form Data:', values)
        onContinueToBilling(values);
    }


    return (
        <>
            <div className='bg-white'>
                <Wrapper>
                    <Formik
                        initialValues={currentInitialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize={true}
                    >
                        {({ errors, touched, isValid }) => (
                            <Form>
                                <Text_Input
                                    label={'Name'}
                                    type={'text'}
                                    name={'user_name'}
                                    touched={touched.user_name}
                                    error={errors.user_name}
                                />
                                <Text_Input
                                    label={'Email'}
                                    type={'email'}
                                    name={'email'}
                                    touched={touched.email}
                                    error={errors.email}
                                />
                                <Text_Input
                                    label={'Phone Number'}
                                    type={'tel'}
                                    name={'phone'}
                                    touched={touched.phone}
                                    error={errors.phone}
                                />
                                <div>
                                <div className='grid grid-cols-2 max-sm:flex-col max-sm:flex gap-6'>
                                    <DateSelector
                                        label='Date'
                                        name='date'
                                        touched={touched.date}
                                        error={errors.date}
                                    />
                                    <TimeSelector
                                        label='Time'
                                        name='time'
                                        touched={touched.time}
                                        error={errors.time}
                                    />
                                </div>
                                    <div className='grid grid-cols-2 max-sm:flex-col max-sm:flex gap-6'>
                                        <Drop_Down
                                            id='date'
                                            label='Number of Diners'
                                            name='num_of_diners'
                                            img_defualt={green_group}
                                            img_active={white_group}
                                            img_w='min-w-[20px]'
                                            img_h='min-h-[14px]'
                                            options= {num_of_diners}
                                            touched={touched.num_of_diners}
                                            error={errors.num_of_diners}
                                        />

                                        <Drop_Down
                                            label='Occasion'
                                            name='occasion'
                                            img_defualt={glasses_green}
                                            img_active={glasses_white}
                                            img_w='min-w-40px'
                                            img_h='min-h-27px'
                                            options= {occasions}
                                            touched={touched.occasion}
                                            error={errors.occasion}
                                        />
                                    </div>
                                    <Radio
                                        label1='Inside Seating'
                                        label2='Ouside Seating'
                                        value1='inside'
                                        value2='outside'
                                        name='seating'
                                        touched={touched.seating}
                                        error={errors.seating}
                                    />
                                </div>
                                <Button_full label='Continue to Billing' disabled={!isValid} />
                            </Form>
                        )}
                    </Formik>
                </Wrapper>
            </div>
            
        </>
    )
}
export default Reservations
