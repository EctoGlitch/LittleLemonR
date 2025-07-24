import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import Wrapper from './Wrapper'

import Text_Input from '../Form Comps/Text_Input'
import Button_full from '../Form Comps/Button_full'

const Register = () => {
    const initialValues = {f_name: '', l_name: '', email: '', password: '', re_password: ''}
    const validationSchema = Yup.object({
        f_name: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
        l_name: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
        re_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
    })
    const onSubmit = (values, { resetForm }) => {
            console.log('Form Data:', values)
            alert('Submitted successfully! Check console for data.')
            resetForm()
        }
    return (
        <>
        <div className="bg-dark_green">
            <Wrapper>
                <h1 className="text-gold font-display text-display_size max-sm:text-6xl text-7xl -mt-7">Register</h1>
            </Wrapper>
        </div>
        <div className="bg-white">
            <Wrapper>
                <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched, isValid }) => (
                            <Form>
                                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-0">
                                    <Text_Input
                                    label={'First Name'}
                                    type={'text'}
                                    name={'f_name'}
                                    touched={touched.f_name}
                                    error={errors.f_name}
                                />

                                <Text_Input
                                    label={'Last Name'}
                                    type={'text'}
                                    name={'l_name'}
                                    touched={touched.l_name}
                                    error={errors.l_name}
                                />

                                </div>

                                <Text_Input
                                    label={'Email'}
                                    type={'text'}
                                    name={'email'}
                                    touched={touched.email}
                                    error={errors.email}
                                />
                                <Text_Input
                                    label={'Password'}
                                    type={'password'}
                                    name={'password'}
                                    touched={touched.password}
                                    error={errors.password}
                                />

                                <Text_Input
                                    label={'Confirm Password'}
                                    type={'password'}
                                    name={'re_password'}
                                    touched={touched.re_password}
                                    error={errors.re_password}
                                />
                                <Link to='/login'>
                                    <p  className='py-4 font-p text-right text-black font-bold'>Already have an account?</p>
                                </Link>
                                <Button_full type='submit' label='Submit' disabled={!isValid} />
                        </Form>

                        )}
                    </Formik>
            </Wrapper>
        </div>
        </>
    )
}
export default Register