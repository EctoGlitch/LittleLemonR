import Wrapper from "./Wrapper"
import Button from '../Form Comps/Button' // Import Button component

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Text_Input from '../Form Comps/Text_Input'
import Card_Input from '../Form Comps/Card'
import ExpirySelector from "../Form Comps/ExpirySelector"
import CVV_Input from "../Form Comps/CVV"
import Radio from '../Form Comps/Radio'
import Drop_Down from '../Form Comps/Drop_Down'

import { states, countries } from "./Drop_Down_Context"


import globe_green from '../Img/icons_assets/globe_green.png'
import globe_white from '../Img/icons_assets/globe_white.png'

const Billing = ({ onGoBackToReservation, initialValues, onFinalSubmit, reservationFormValid }) => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const defaultInitialValues = { bill_name: '', bill_email: '', bill_phone: '', card: '', expiration: '', cvv: '', address: '', zip_code: '', country: '', state: '', confirmation: '' };
    const currentInitialValues = Object.keys(initialValues).length > 0 ? initialValues : defaultInitialValues;

    const validationSchema = Yup.object({
            bill_name: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
            bill_email: Yup.string().email('Invalid email format').required('Required'),
            bill_phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, 'Phone number not long enough.'),
            card: Yup.string().min(16, 'Card number not long enough.').required('Required'),
            expiration: Yup.string().required('Required'),
            cvv: Yup.string().required('Required'),
            address: Yup.string().required('Required'),
            zip_code: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
            state: Yup.string().required('Required'),
            confirmation: Yup.string().required('Required')
        })

        const onSubmit = (values) => {
            console.log('Form Data:', values)
            onFinalSubmit(values);
        }


    return (
        <>
        <div className="bg-dark_green">
            <Wrapper>
                <h1 className="text-gold font-display text-display_size max-sm:text-6xl text-7xl -mt-7">Billing</h1>
            </Wrapper>
        </div>
        <div className="bg-white">
            <Wrapper>
                <Formik
                    initialValues={currentInitialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                >
                    {({ errors, touched, values, isValid }) => (
                        <Form>
                            <Button className='min-w-full' label='Go Back to Reservation' onClick={() => onGoBackToReservation(values)}>Go Back</Button>
                            <Text_Input
                                label={'Name of Card Holder'}
                                type={'text'}
                                name={'bill_name'}
                                touched={touched.bill_name}
                                error={errors.bill_name}
                            />
                            <Card_Input
                                label={'Card Number'}
                                type={'text'}
                                name={'card'}
                                touched={touched.card}
                                error={errors.card}
                            />
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-0">
                                <ExpirySelector
                                    label='Expiration Date'
                                    name='expiration'
                                    touched={touched.expiration}
                                    error={errors.expiration}
                                />
                                <CVV_Input
                                    label='CVV'
                                    name='cvv'
                                    touched={touched.expiration}
                                    error={errors.expiration}
                                />

                            </div>
                            <Text_Input
                                label={'Email'}
                                type={'text'}
                                name={'bill_email'}
                                touched={touched.bill_email}
                                error={errors.bill_email}
                            />
                            <Text_Input
                                label={'Phone Number'}
                                type={'tel'}
                                name={'bill_phone'}
                                touched={touched.bill_phone}
                                error={errors.bill_phone}
                            />
                            <Text_Input
                                label={'Address'}
                                type={'text'}
                                name={'address'}
                                touched={touched.address}
                                error={errors.address}
                            />
                            <Text_Input
                                label={'Zip Code'}
                                type={'text'}
                                name={'zip_code'}
                                touched={touched.zip_code}
                                error={errors.zip_code}
                            />
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-0">
                            <Drop_Down
                                label='Country'
                                name='country'
                                img_defualt={globe_green}
                                img_active={globe_white}
                                img_w='min-w-[30px]'
                                img_h='min-h-[30px]'
                                options={countries}
                                touched={touched.country}
                                error={errors.country}
                            />
                            <Drop_Down
                                label='State/Province'
                                name='state'
                                img_defualt={globe_green}
                                img_active={globe_white}
                                img_w='min-w-[30px]'
                                img_h='min-h-[30px]'
                                options={states.filter(state => state.country === values.country)}
                                touched={touched.state}
                                error={errors.state}
                            />
                            </div>

                            <Radio
                                label1='Send me confirmation via text *'
                                label2='Send me confirmation via email *'
                                value1='text'
                                value2='email'
                                name='confirmation'
                                touched={touched.confirmation}
                                error={errors.confirmation}
                            />
                            <Button className='min-w-full' label='Pay Now' type={'submit'} disabled={!isValid || !reservationFormValid} />
                        </Form>

                    )}
                </Formik>
            </Wrapper>
        </div>
        </>
    )
}

export default Billing