import Wrapper from "./Wrapper"
import Button from '../Form Comps/Button'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Text_Input from '../Form Comps/Text_Input'
import Card_Input from '../Form Comps/Card'
import ExpirySelector from "../Form Comps/ExpirySelector"
import CVV_Input from "../Form Comps/CVV"
import Radio from '../Form Comps/Radio'
import Drop_Down from '../Form Comps/Drop_Down'
import { useCart } from './cart_context'
import { useNavigate } from 'react-router-dom'

import { states, countries } from "./Drop_Down_Context"

import globe_green from '../Img/icons_assets/globe_green.png'
import globe_white from '../Img/icons_assets/globe_white.png'

const Billing = ({ onGoBackToReservation, initialValues, reservationFormValid, backButtonLabel = 'Review Cart', reservationData }) => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
            clearCart()
            localStorage.removeItem('pendingItems')

            const successInfo = {
                confirmationType: values.confirmation,
                name: values.bill_name
            }

            if (reservationData && Object.keys(reservationData).length > 0) {
                successInfo.reservationDetails = {
                    name: reservationData.user_name,
                    date: reservationData.date,
                    time: reservationData.time,
                    guests: reservationData.num_of_diners,
                    occasion: reservationData.occasion
                }
            }
            localStorage.setItem('successInfo', JSON.stringify(successInfo))
            navigate('/paymentsuccess')
        }

    const { clearCart } = useCart()
    const navigate = useNavigate()

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
<Button className='min-w-full' label={backButtonLabel} onClick={() => onGoBackToReservation(values)} aria-label={backButtonLabel}>{backButtonLabel}</Button>
                            <Text_Input
                                label={'Name of Card Holder'}
                                type={'text'}
                                name={'bill_name'}
                                touched={touched.bill_name}
                                error={errors.bill_name}
                                aria-label="Name of Card Holder"
                                aria-invalid={touched.bill_name && errors.bill_name ? "true" : "false"}
                                aria-describedby={touched.bill_name && errors.bill_name ? "bill_name-error" : undefined}
                            />
                            {touched.bill_name && errors.bill_name && <div id="bill_name-error" className="error-message" hidden>{errors.bill_name}</div>}
                            <Card_Input
                                label={'Card Number'}
                                type={'text'}
                                name={'card'}
                                touched={touched.card}
                                error={errors.card}
                                aria-label="Card Number"
                                aria-invalid={touched.card && errors.card ? "true" : "false"}
                                aria-describedby={touched.card && errors.card ? "card-error" : undefined}
                            />
                            {touched.card && errors.card && <div id="card-error" className="error-message" hidden>{errors.card}</div>}
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-0">
                                <ExpirySelector
                                    label='Expiration Date'
                                    name='expiration'
                                    touched={touched.expiration}
                                    error={errors.expiration}
                                    aria-label="Expiration Date"
                                    aria-invalid={touched.expiration && errors.expiration ? "true" : "false"}
                                    aria-describedby={touched.expiration && errors.expiration ? "expiration-error" : undefined}
                                />
                                {touched.expiration && errors.expiration && <div id="expiration-error" className="error-message" hidden>{errors.expiration}</div>}
                                <CVV_Input
                                    label='CVV'
                                    name='cvv'
                                    touched={touched.cvv}
                                    error={errors.cvv}
                                    aria-label="CVV"
                                    aria-invalid={touched.cvv && errors.cvv ? "true" : "false"}
                                    aria-describedby={touched.cvv && errors.cvv ? "cvv-error" : undefined}
                                />
                                {touched.cvv && errors.cvv && <div id="cvv-error" className="error-message" hidden>{errors.cvv}</div>}

                            </div>
                            <Text_Input
                                label={'Email'}
                                type={'text'}
                                name={'bill_email'}
                                touched={touched.bill_email}
                                error={errors.bill_email}
                                aria-label="Email"
                                aria-invalid={touched.bill_email && errors.bill_email ? "true" : "false"}
                                aria-describedby={touched.bill_email && errors.bill_email ? "bill_email-error" : undefined}
                            />
                            {touched.bill_email && errors.bill_email && <div id="bill_email-error" className="error-message" hidden>{errors.bill_email}</div>}
                            <Text_Input
                                label={'Phone Number'}
                                type={'tel'}
                                name={'bill_phone'}
                                touched={touched.bill_phone}
                                error={errors.bill_phone}
                                aria-label="Phone Number"
                                aria-invalid={touched.bill_phone && errors.bill_phone ? "true" : "false"}
                                aria-describedby={touched.bill_phone && errors.bill_phone ? "bill_phone-error" : undefined}
                            />
                            {touched.bill_phone && errors.bill_phone && <div id="bill_phone-error" className="error-message" hidden>{errors.bill_phone}</div>}
                            <Text_Input
                                label={'Address'}
                                type={'text'}
                                name={'address'}
                                touched={touched.address}
                                error={errors.address}
                                aria-label="Address"
                                aria-invalid={touched.address && errors.address ? "true" : "false"}
                                aria-describedby={touched.address && errors.address ? "address-error" : undefined}
                            />
                            {touched.address && errors.address && <div id="address-error" className="error-message" hidden>{errors.address}</div>}
                            <Text_Input
                                label={'Zip Code'}
                                type={'text'}
                                name={'zip_code'}
                                touched={touched.zip_code}
                                error={errors.zip_code}
                                aria-label="Zip Code"
                                aria-invalid={touched.zip_code && errors.zip_code ? "true" : "false"}
                                aria-describedby={touched.zip_code && errors.zip_code ? "zip_code-error" : undefined}
                            />
                            {touched.zip_code && errors.zip_code && <div id="zip_code-error" className="error-message" hidden>{errors.zip_code}</div>}
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
                                aria-label="Country"
                                aria-invalid={touched.country && errors.country ? "true" : "false"}
                                aria-describedby={touched.country && errors.country ? "country-error" : undefined}
                            />
                            {touched.country && errors.country && <div id="country-error" className="error-message" hidden>{errors.country}</div>}
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
                                aria-label="State/Province"
                                aria-invalid={touched.state && errors.state ? "true" : "false"}
                                aria-describedby={touched.state && errors.state ? "state-error" : undefined}
                            />
                            {touched.state && errors.state && <div id="state-error" className="error-message" hidden>{errors.state}</div>}
                            </div>

                            <Radio
                                label1='Send me confirmation via text *'
                                label2='Send me confirmation via email *'
                                value1='text'
                                value2='email'
                                name='confirmation'
                                touched={touched.confirmation}
                                error={errors.confirmation}
                                aria-label="Confirmation Preference"
                                aria-invalid={touched.confirmation && errors.confirmation ? "true" : "false"}
                                aria-describedby={touched.confirmation && errors.confirmation ? "confirmation-error" : undefined}
                            />
                            {touched.confirmation && errors.confirmation && <div id="confirmation-error" className="error-message" hidden>{errors.confirmation}</div>}
                            <Button className='min-w-full' label='Pay Now' type={'submit'} disabled={!isValid || !reservationFormValid} aria-label="Pay Now" />
                        </Form>

                    )}
                </Formik>
            </Wrapper>
        </div>
        </>
    )
}

export default Billing
